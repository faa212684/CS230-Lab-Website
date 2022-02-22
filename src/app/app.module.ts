import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ApplyHereComponent } from './Body/applyhere.component';
import { GiftComponent } from './Body/gift.component';
import { InformationComponent } from './Body/information.component';
import { MenuItemsComponent } from './Body/menuitems.component';
import { BottomNavBarComponent } from './Footer/bottomnavbar.component';
import { SecondBottomNavBarComponent } from './Footer/secondbottomnavbar.component';
import { ThirdBottomNavBarComponent } from './Footer/thirdbottomnavbar.component';
import { SecondNavBarComponent } from './Header/secondnavbar.component';
import { TopNavBarComponent } from './Header/topnavbar.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuLayoutComponent } from './Routes/menu-layout.component';
import { HomeLayoutComponent } from './Routes/home-layout.component';
import { LocationLayoutComponent } from './Routes/location-layout.component';
import { DeliveryLayoutComponent } from './Routes/delivery-layout.component';
import { PerksLayoutComponent } from './Routes/perks-layout.component';
import { CardsLayoutComponent } from './Routes/cards-layout.component';
import { ShopLayoutComponent } from './Routes/shop-layout.component';
import { MenuPageComponent } from './Routes/MenuItemsPage/menupage.component';
import { MenuHeaderComponent } from './Routes/MenuItemsPage/menuheader.component';
import { MobileAppComponent } from './Body/mobileapp.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SecondNavBarComponent,
    BottomNavBarComponent,
    SecondBottomNavBarComponent,
    ThirdBottomNavBarComponent,
    InformationComponent,
    ApplyHereComponent,
    GiftComponent,
    MenuItemsComponent,
    MenuLayoutComponent,
    HomeLayoutComponent,
    LocationLayoutComponent,
    DeliveryLayoutComponent,
    PerksLayoutComponent,
    CardsLayoutComponent,
    ShopLayoutComponent,
    MenuPageComponent,
    MenuHeaderComponent,
    MobileAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
