import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'bf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  get email(): AbstractControl {
    return this.loginForm?.get('email');
  }

  get password(): AbstractControl {
    return this.loginForm?.get('password');
  }

  constructor(private toastrService: ToastrService) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  public login(): void {
    const loginData = this.loginForm.getRawValue();
    console.log('loginData: ', loginData);
    this.toastrService.success('Test Toast');
  }
}
