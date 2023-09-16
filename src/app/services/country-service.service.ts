import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {FetchService} from "./fetch.service";
import {FilterRequest} from "../country/country-info/country-info.component";
import {SortDirection} from "@angular/material/sort";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private fetchService: FetchService) {
  }

  // Fetch the list of countries
  getCountries(): Observable<any[]> {
    return this.fetchService.get('/countries/all')
  }

  // Fetch the list of spoken languages for a specific country code
  getLanguages(countryId: string): Observable<any> {
    return this.fetchService.get('/countries/languages/' + countryId)
  }

  // Fetch country statistics
  getCountryBestStats(): Observable<any[]> {
    return this.fetchService.get('/countries/gdp');
  }

  getCountryInfo(filterRequest: FilterRequest, sort: string, order: SortDirection, page: number): Observable<any> {
    const url = `/countries/country-stats?sort=${sort},${order}&page=${
      page + 1
    }`;
    return this.fetchService.post(url, filterRequest);
  }
}
