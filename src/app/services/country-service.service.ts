import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {CountryLanguages} from "../country/country-languages/country-languages.component";
import {FetchService} from "./fetch.service";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private countries: any[] = [
    { id: '1', name: 'United States', area: 9833517, country_code2: 'USA' },
    // Add more country data as needed
  ];

  private languages: CountryLanguages = {
    countryName: 'United States', languages: ['English']
  };

  private countryStats: any[] = [
    { countryCode2: 'US', year: 2020, population: 331915073, gdp: 21433225, gdpPerPopulation: 64485 },
    // Add more country stats data as needed
  ];

  constructor(private fetchService: FetchService) { }

  // Fetch the list of countries
  getCountries(): Observable<any[]> {
    return this.fetchService.get('/countries/all')
    // return of(this.countries);
  }

  // Fetch the list of spoken languages for a specific country code
  getLanguages(countryId: string): Observable<any> {
    return this.fetchService.get('/countries/languages/'+ countryId)
    // const filteredLanguages = this.languages.filter(lang => lang.countryCode2 === countryCode2);
    // return of(this.languages);
  }

  // Fetch country statistics
  getCountryBestStats(): Observable<any[]> {
    return of(this.countryStats);
  }
}
