import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { HomeRoutingModule } from './home-routing.module';
import { NavigationOpenComponent } from './navigation-open/navigation-open.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginButtonModule } from '../login-button/login-button.module';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    NavigationOpenComponent,
    WelcomeComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    LoginButtonModule,
  ],
  exports: [NavigationOpenComponent],
})
export class HomeModule {}
