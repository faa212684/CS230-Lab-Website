import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ApplyHereComponent } from './Body/applyhere.component';
import { GiftComponent } from './Body/gift.component';
import { InformationComponent } from './Body/information.component';
import { BottomNavBarComponent } from './Footer/bottomnavbar.component';
import { SecondBottomNavBarComponent } from './Footer/secondbottomnavbar.component';
import { ThirdBottomNavBarComponent } from './Footer/thirdbottomnavbar.component';
import { SecondNavBarComponent } from './Header/secondnavbar.component';
import { TopNavBarComponent } from './Header/topnavbar.component';

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
    GiftComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
