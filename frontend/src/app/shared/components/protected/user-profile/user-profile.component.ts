import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'bf-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
  public readonly title = 'Decoded ID Token';

  public user$: Observable<any>;
  public code$: Observable<string>;

  constructor(private authService: AuthService) {
    this.user$ = this.authService.user$;
    this.code$ = this.user$.pipe(map((user) => JSON.stringify(user, null, 2)));
  }
}
