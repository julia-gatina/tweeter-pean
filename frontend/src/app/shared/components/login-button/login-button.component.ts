import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'bf-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss'],
})
export class LoginButtonComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  public loginButtonClicked(): void {
    this.authService.loginWithRedirect();
  }
}
