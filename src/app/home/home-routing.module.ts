import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountComponent } from './account/account.component';
import { CartComponent } from './cart/cart.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { BuyNowSectionComponent } from './buy-now-section/buy-now-section.component';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'account', component: AccountComponent },
      { path: 'cart', component: CartComponent },
      { path: 'buy_now', component: BuyNowSectionComponent },
      { path: 'category', component: CategoriesComponent },
    ],
  },
  { path: 'notification', component: NotificationsComponent },
  { path: 'search', component: SearchBarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
