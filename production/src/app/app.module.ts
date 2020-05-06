import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  SharedModule } from './shared/shared.module';
import {  HomeModule, HomeService } from './home';
import { registerLocaleData } from '@angular/common';
import localZh from "@angular/common/locales/zh-Hans"
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    // HomeService,
    HttpClientModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue:"zh-Hans"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    registerLocaleData(localZh,'zh');
  }
}
