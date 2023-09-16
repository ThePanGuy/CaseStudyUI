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

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-country-max-gdp',
  templateUrl: './country-max-gdp.component.html',
  styleUrls: ['./country-max-gdp.component.css']
})
export class CountryMaxGdpComponent implements OnInit, OnDestroy{
  countryBestStats: CountryBestStats[] = [];
  serviceSubscription?: Subscription;
  displayedColumns: string[] = ['countryName', 'countryCode3', 'year', 'population', 'gdp'];
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;


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
