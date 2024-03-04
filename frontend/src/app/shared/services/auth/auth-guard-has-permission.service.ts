import { Inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { jwtDecode } from 'jwt-decode';
import { AuthPermissions } from '../../components/page-wrapper/page-wrapper-routing.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardHasPermission implements CanActivate {
  constructor(
    private authService: AuthService,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const routData = route.data as AuthPermissions;
    const requiredPermissions = routData.permissions;
    return this.authService.getAccessTokenSilently().pipe(
      map((accessToken) => {
        const permissions = this.extractPermissions(accessToken);
        const hasPermissions = this.hasRequiredPermissions(
          requiredPermissions,
          permissions
        );
        return hasPermissions;
      })
    );
  }

  private extractPermissions(accessToken: string): string[] {
    try {
      const decodedToken: any = jwtDecode(accessToken);
      return decodedToken.permissions || [];
    } catch (error) {
      console.error('Error decoding access token:', error);
      return [];
    }
  }

  private hasRequiredPermissions(
    requiredPermissions: string[],
    userPermissions: string[]
  ): boolean {
    return requiredPermissions.every((permission) =>
      userPermissions.includes(permission)
    );
  }
}
