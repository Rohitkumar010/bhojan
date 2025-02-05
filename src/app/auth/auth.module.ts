import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { IonicModule } from '@ionic/angular';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';

@NgModule({
  declarations: [WelcomePageComponent, LoginPageComponent, SignupPageComponent],
  imports: [CommonModule, AuthRoutingModule, IonicModule],
})
export class AuthModule {}
