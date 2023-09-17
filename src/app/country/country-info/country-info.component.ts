import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {catchError, map, merge, of, startWith, Subscription, switchMap} from "rxjs";
import {CountryService} from "../../services/country-service.service";
import {RegionService} from "../../services/region.service";

export interface CountryInfo {
  continentName: string,
  regionName: string,
  countryName: string,
  year: number,
  population: number,
  gdp: number
}

export interface FilterRequest {
  regionId?: string,
  from?: number,
  to?: number
}

export interface PageItem<T> {
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

export interface Region {
  regionId: string,
  name: string
}

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.css']
})
export class CountryInfoComponent implements OnInit, AfterViewInit, OnDestroy {
  displayedColumns: string[] = ['continentName', 'regionName', 'countryName', 'id.year', 'population', 'gdp'];
  countryInfo: CountryInfo[] = [];
  availableRegions: Region[] = [];
  filterRequest: FilterRequest = {};

  resultsLength = 0;
  isLoadingResults = true;

  httpSubscription?: Subscription;
  filterSubscription?: Subscription;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private countryService: CountryService, private regionService: RegionService) {
  }

  ngOnInit() {
    this.regionService.getAvailableRegions().subscribe(data => {
      this.availableRegions = data;
    })
  }

  ngAfterViewInit() {
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    this.httpSubscription = merge(this.sort.sortChange, this.paginator.page)
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

  ngOnDestroy() {
    this.httpSubscription && this.httpSubscription.unsubscribe();
    this.filterSubscription && this.filterSubscription.unsubscribe();
  }

  applyFilters() {
    if (this.filterRequest.from) {
      if (this.filterRequest.from < 1960 || this.filterRequest.from > 2018) {
        alert('From and To year should be in the range of 1960 and 2018');
        return;
      }
    }
    if (this.filterRequest.to) {
      if (this.filterRequest.to < 1960 || this.filterRequest.to > 2018) {
        alert('From and To year should be in the range of 1960 and 2018');
        return;
      }
    }
    this.getDataWithFilters();
  }

  resetFilters() {
    this.filterRequest = {}
    this.sort.active = 'id.year';
    this.sort.direction = 'desc';
    this.paginator.pageIndex = 0;
    this.getDataWithFilters();
  }

  getDataWithFilters() {
    this.isLoadingResults = true;
    this.filterSubscription = this.countryService
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
