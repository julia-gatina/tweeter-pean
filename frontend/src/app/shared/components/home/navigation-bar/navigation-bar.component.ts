import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'bf-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent {
  public isAuthenticated$: Observable<boolean>;

  constructor(
    private authService: AuthService,
    @Inject(DOCUMENT) private doc: Document
  ) {
    this.isAuthenticated$ = this.authService.isAuthenticated$;
  }

  public handleLogout(): void {
    this.authService.logout({
      logoutParams: {
        returnTo: this.doc.location.origin,
      },
    });
  }

  public handleSignUp(): void {
    this.authService.loginWithRedirect({
      appState: {
        target: '/profile',
      },
      authorizationParams: {
        screen_hint: 'signup',
      },
    });
  }

  public handleLogin(): void {
    this.authService.loginWithRedirect({
      appState: {
        target: '/profile',
      },
    });
  }
}
