import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CountryAreaComponent} from "./country/country-area/country-area.component";
import {CountryLanguagesComponent} from "./country/country-languages/country-languages.component";
import {CountryMaxGdpComponent} from "./country/country-max-gdp/country-max-gdp.component";
import {CountryInfoComponent} from "./country/country-info/country-info.component";
import {SiteToolbarComponent} from "./common/site-toolbar/site-toolbar.component";

const routes: Routes = [
  { path: '', redirectTo: '/country-area', pathMatch: 'full' },
  { path: 'country-area', component: CountryAreaComponent },
  { path: 'country-languages/:countryId', component: CountryLanguagesComponent },
  { path: 'country-stats', component: CountryMaxGdpComponent },
  { path: 'country-info', component: CountryInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
