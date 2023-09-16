import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppComponent } from './app.component';
import { SiteToolbarComponent } from './common/site-toolbar/site-toolbar.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {CountryAreaComponent} from "./country/country-area/country-area.component";
import {CountryLanguagesComponent} from "./country/country-languages/country-languages.component";
import {CountryMaxGdpComponent} from "./country/country-max-gdp/country-max-gdp.component";
import {CountryInfoComponent} from "./country/country-info/country-info.component";
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import { SiteDropdownComponent } from './common/site-dropdown/site-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteToolbarComponent,
    CountryAreaComponent,
    CountryLanguagesComponent,
    CountryMaxGdpComponent,
    CountryInfoComponent,
    SiteDropdownComponent
  ],
  imports: [
    BrowserModule,
    MatSlideToggleModule,
    RouterOutlet,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
