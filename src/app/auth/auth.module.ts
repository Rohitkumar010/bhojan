import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { IonicModule } from '@ionic/angular';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { FormsModule } from '@angular/forms';
import { NewPasswordComponent } from './new-password/new-password.component';

@NgModule({
  declarations: [
    WelcomePageComponent,
    LoginPageComponent,
    SignupPageComponent,
    ForgotPasswordComponent,
    EmailVerificationComponent,
    NewPasswordComponent
  ],
  imports: [CommonModule, AuthRoutingModule, IonicModule,FormsModule],
})
export class AuthModule {}
