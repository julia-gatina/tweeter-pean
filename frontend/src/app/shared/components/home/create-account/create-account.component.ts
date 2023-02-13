import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'bf-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent implements OnInit {
  public registerForm: FormGroup;
  public passwordDontMatch = false;

  private usernameRegex = '^([a-zA-Z0-9]){5,10}$';

  get name(): AbstractControl {
    return this.registerForm?.get('name');
  }

  get username(): AbstractControl {
    return this.registerForm?.get('username');
  }

  get email(): AbstractControl {
    return this.registerForm?.get('email');
  }

  get password(): AbstractControl {
    return this.registerForm?.get('password');
  }

  get password2(): AbstractControl {
    return this.registerForm?.get('password2');
  }

  constructor() {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)])),
      username: new FormControl('', Validators.compose([Validators.required, Validators.pattern(this.usernameRegex)])),
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      password2: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
    });
  }

  public createAccount(): void {
    const createUserData = this.registerForm.getRawValue();
    this.passwordDontMatch = createUserData.password != createUserData.password2;
    if (this.passwordDontMatch) {
      return;
    }
    console.log('createUserData: ', createUserData);
  }
}
