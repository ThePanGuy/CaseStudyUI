import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CountryAreaComponent} from "./country-area/country-area.component";
import {CountryLanguagesComponent} from "./country-languages/country-languages.component";
import {CountryMaxGdpComponent} from "./country-max-gdp/country-max-gdp.component";
import {CountryInfoComponent} from "./country-info/country-info.component";

const routes: Routes = [
  { path: '', redirectTo: '/country-area', pathMatch: 'full' }, // Default route
  { path: 'country-area', component: CountryAreaComponent }, // Route for country list
  { path: 'country-languages/:countryId', component: CountryLanguagesComponent }, // Route for languages list
  { path: 'country-stats', component: CountryMaxGdpComponent },
  { path: 'country-info', component: CountryInfoComponent}// Route for country stats
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
