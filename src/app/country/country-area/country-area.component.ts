import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CountryService} from "../../services/country-service.service";
import {Subscription} from "rxjs";

export interface Country {
  countryId: string,
  name: string,
  area: number,
  countryCode2: string
}

@Component({
  selector: 'app-country-area',
  templateUrl: './country-area.component.html',
  styleUrls: ['./country-area.component.css']
})
export class CountryAreaComponent implements OnInit, OnDestroy {
  countries: Country[] = [];
  countriesSubscription?: Subscription;

  constructor(private router: Router, private countryService: CountryService) {
  }

  ngOnInit() {
    this.countriesSubscription = this.countryService.getCountries().subscribe(data => {
      this.countries = data;
    })
  }

  ngOnDestroy() {
    this.countriesSubscription && this.countriesSubscription.unsubscribe();
  }

  onCountryClick(countryId: string) {
    this.router.navigate(['/country-languages', countryId]);
  }

}
