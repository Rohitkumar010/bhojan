import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NotificationsComponent } from './notifications/notifications.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { AccountComponent } from './account/account.component';
import { BuyNowSectionComponent } from './buy-now-section/buy-now-section.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    DashboardComponent,
    NotificationsComponent,
    SearchBarComponent,
    AccountComponent,
    BuyNowSectionComponent,
    CartComponent,
    CategoriesComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  
})
export class HomePageModule {}
