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

export interface PageItem<T>{
  "content": T[],
  "pageable": {
    "pageNumber": number,
    "pageSize": number,
    "sort": {
      "empty": boolean,
      "sorted": boolean,
      "unsorted": boolean
    },
    "offset": number,
    "paged": boolean,
    "unpaged": boolean
  },
  "last": boolean,
  "totalPages": number,
  "totalElements": number,
  "size": number,
  "number": number,
  "sort": {
    "empty": boolean,
    "sorted": boolean,
    "unsorted": boolean
  },
  "first": boolean,
  "numberOfElements": number,
  "empty": boolean
}

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.css']
})
export class CountryInfoComponent implements AfterViewInit {
  displayedColumns: string[] = ['continentName', 'regionName', 'countryName', 'id.year', 'population', 'gdp'];
  countryInfo: CountryInfo[] = [];
  filterRequest: FilterRequest = {
    regionName: ""
  };

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
          this.resultsLength = data.totalElements;
          return data.content;
        })
      ).subscribe(data => {
        this.countryInfo = data;
    })
  }

  applyFilters() {
    this.getDataWithFilters();
  }

  getDataWithFilters() {
    this.isLoadingResults = true;
    this.countryService
      .getCountryInfo(this.filterRequest, this.sort.active, this.sort.direction, this.paginator.pageIndex)
      .pipe(catchError(() => of(null)))
      .subscribe(data => {
        this.isLoadingResults = false;
        if (data == null) {
          this.countryInfo = [];
          this.resultsLength = 0;
        } else {
          this.countryInfo = data.content;
          this.resultsLength = data.totalElements;
        }
      });
  }


}
