import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import {AppComponent} from './app.component';
import {SiteToolbarComponent} from './common/site-toolbar/site-toolbar.component';
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
import {SiteDropdownComponent} from './common/site-dropdown/site-dropdown.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {HomePageComponent} from './common/site-home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteToolbarComponent,
    CountryAreaComponent,
    CountryLanguagesComponent,
    CountryMaxGdpComponent,
    CountryInfoComponent,
    SiteDropdownComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    RouterOutlet,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
