import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppComponent } from './app.component';
import { SiteMenuComponent } from './site-menu/site-menu.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {CountryAreaComponent} from "./country-area/country-area.component";
import {CountryLanguagesComponent} from "./country-languages/country-languages.component";
import {CountryMaxGdpComponent} from "./country-max-gdp/country-max-gdp.component";
import {CountryInfoComponent} from "./country-info/country-info.component";

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
