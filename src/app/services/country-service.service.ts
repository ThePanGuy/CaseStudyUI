import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {FetchService} from "./fetch.service";
import {CountryInfo, FilterRequest, PageItem} from "../country/country-info/country-info.component";
import {SortDirection} from "@angular/material/sort";
import {CountryLanguages} from "../country/country-languages/country-languages.component";
import {Country} from "../country/country-area/country-area.component";
import {CountryBestStats} from "../country/country-max-gdp/country-max-gdp.component";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private fetchService: FetchService) {
  }

  getCountries(): Observable<Country[]> {
    return this.fetchService.get<Country[]>('/countries/all')
  }

  getLanguages(countryId: string): Observable<CountryLanguages> {
    return this.fetchService.get<CountryLanguages>('/countries/languages/' + countryId)
  }

  getCountryBestStats(): Observable<CountryBestStats[]> {
    return this.fetchService.get<CountryBestStats[]>('/countries/gdp');
  }

  getCountryInfo(filterRequest: FilterRequest, sort: string, order: SortDirection, page: number): Observable<PageItem<CountryInfo>> {
    const url = `/countries/country-stats?sort=${sort},${order}&page=${page}`;
    return this.fetchService.post<PageItem<CountryInfo>>(url, filterRequest);
  }
}
