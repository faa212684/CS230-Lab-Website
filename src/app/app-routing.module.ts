import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MenuLayoutComponent } from './Routes/menu-layout.component';
import { HomeLayoutComponent } from './Routes/home-layout.component';
import { LocationLayoutComponent } from './Routes/location-layout.component';
import { DeliveryLayoutComponent } from './Routes/delivery-layout.component';
import { CardsLayoutComponent } from './Routes/cards-layout.component';
import { PerksLayoutComponent } from './Routes/perks-layout.component';
import { ShopLayoutComponent } from './Routes/shop-layout.component';

const routes:Routes = [
  {
    path: '',
    component: HomeLayoutComponent
  },
  {
    path: 'en/menu', 
    component: MenuLayoutComponent
  },
  {
    path: 'en/locations',
    component: LocationLayoutComponent
  },
  {
    path: 'en/dunkin-delivers',
    component: DeliveryLayoutComponent
  },
  {
    path: 'en/dd-Perks',
    component: PerksLayoutComponent
  },
  {
    path: 'en/dunkin-cards',
    component: CardsLayoutComponent
  },
  {
    path: 'en/shop',
    component: ShopLayoutComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
