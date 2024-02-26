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

@Injectable({
  providedIn: 'root',
})
export class AuthGuardEmailVerified implements CanActivate {
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
    return this.authService.user$.pipe(
      map((user) => {
        const emailVerified = user.email_verified;
        if (!emailVerified) {
          this.authService.logout({
            logoutParams: {
              returnTo: `${this.doc.location.origin}/error/email-not-verified`,
            },
          });
        }
        return emailVerified;
      })
    );
  }
}
