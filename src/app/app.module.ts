import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppComponent } from './app.component';
import { SiteMenuComponent } from './site-menu/site-menu.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {CountryAreaComponent} from "./country/country-area/country-area.component";
import {CountryLanguagesComponent} from "./country/country-languages/country-languages.component";
import {CountryMaxGdpComponent} from "./country/country-max-gdp/country-max-gdp.component";
import {CountryInfoComponent} from "./country/country-info/country-info.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    SiteMenuComponent,
    CountryAreaComponent,
    CountryLanguagesComponent,
    CountryMaxGdpComponent,
    CountryInfoComponent
  ],
  imports: [
    BrowserModule,
    MatSlideToggleModule,
    RouterOutlet,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
