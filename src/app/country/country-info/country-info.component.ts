import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorIntl} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {catchError, map, merge, of, startWith, switchMap} from "rxjs";
import {CountryService} from "../../services/country-service.service";

export interface CountryInfo {
  continentName: string,
  regionName: string,
  countryName: string,
  year: number,
  population: number,
  gdp: number
}

export interface FilterRequest {
  regionName?: string,
  from?: number,
  to?: number
}

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.css']
})
export class CountryInfoComponent implements AfterViewInit {
  displayedColumns: string[] = ['continentName', 'regionName', 'countryName', 'id.year', 'population', 'gdp'];
  countryInfo: CountryInfo[] = [];
  filterRequest: FilterRequest = {};

  resultsLength = 0;
  isLoadingResults = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private countryService: CountryService) {
  }

  ngAfterViewInit() {
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.countryService
            .getCountryInfo(this.filterRequest,
              this.sort.active,
              this.sort.direction,
              this.paginator.pageIndex)
            .pipe(catchError(() => of(null)));
        }),
        map(data => {
          this.isLoadingResults = false;
          if (data == null) {
            return [];
          }
          debugger
          this.resultsLength = data.numberOfElements;
          return data.content;
        })
      ).subscribe(data => {
        this.countryInfo = data;
    })
  }


}
