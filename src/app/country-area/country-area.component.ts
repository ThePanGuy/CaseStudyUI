import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CountryService} from "../services/country-service.service";

interface Country {
  id: string,
  name: string,
  area: number,
  countryCode2: string
}

@Component({
  selector: 'app-country-area',
  templateUrl: './country-area.component.html',
  styleUrls: ['./country-area.component.css']
})
export class CountryAreaComponent implements OnInit{
  countries: Country[] = [];
  constructor(private router: Router, private countryService: CountryService) {}

  ngOnInit() {
    this.countryService.getCountries().subscribe(data => {
      this.countries = data;
    })
  }

  onCountryClick(countryId: string) {
    this.router.navigate(['/country-languages', countryId]);
  }

}
