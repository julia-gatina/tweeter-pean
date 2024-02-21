import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'bf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'tweeter-ui';
  public isAuth0Loading$ = this.authService.isLoading$;

  constructor(private authService: AuthService) {}
}
