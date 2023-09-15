import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-country-area',
  templateUrl: './country-area.component.html',
  styleUrls: ['./country-area.component.css']
})
export class CountryAreaComponent {
  constructor(private router: Router) {}

  onCountryClick(countryId: string) {
    this.router.navigate(['/languages-list', countryId]);
  }

}
