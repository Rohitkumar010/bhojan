import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome_page', pathMatch: 'full' },
  { path: 'welcome_page', component: WelcomePageComponent },
  { path: 'login_page', component: LoginPageComponent },
  { path: 'signup_page', component: SignupPageComponent },
  { path: 'forgot_password', component: ForgotPasswordComponent },
  { path: 'verify_email', component: EmailVerificationComponent },
  { path: 'new_password', component: NewPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
