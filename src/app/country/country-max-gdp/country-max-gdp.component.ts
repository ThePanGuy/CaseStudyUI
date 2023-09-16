import {Component, OnDestroy, OnInit} from '@angular/core';
import {CountryService} from "../../services/country-service.service";
import {Subscription} from "rxjs";

interface CountryBestStats {
  countryName: string,
  countryCode3: string,
  year: number,
  population: number,
  gpd: number
}

@Component({
  selector: 'app-country-max-gdp',
  templateUrl: './country-max-gdp.component.html',
  styleUrls: ['./country-max-gdp.component.css']
})
export class CountryMaxGdpComponent implements OnInit, OnDestroy{
  countryBestStats: CountryBestStats[] = [];
  serviceSubscription?: Subscription;
  displayedColumns: string[] = ['countryName', 'countryCode3', 'year', 'population', 'gdp'];

  constructor(private countryService: CountryService) {
  }

  ngOnInit() {
    this.serviceSubscription = this.countryService.getCountryBestStats().subscribe(data => {
      this.countryBestStats = data;
    })
  }

  ngOnDestroy(): void {
    this.serviceSubscription?.unsubscribe();
  }
}
