import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CountryAreaComponent} from "./country-area/country-area.component";
import {CountryLanguagesComponent} from "./country-languages/country-languages.component";
import {CountryMaxGdpComponent} from "./country-max-gdp/country-max-gdp.component";

const routes: Routes = [
  { path: '', redirectTo: '/country-list', pathMatch: 'full' }, // Default route
  { path: 'country-list', component: CountryAreaComponent }, // Route for country list
  { path: 'languages-list/:countryCode2', component: CountryLanguagesComponent }, // Route for languages list
  { path: 'country-stats', component: CountryMaxGdpComponent }, // Route for country stats
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
