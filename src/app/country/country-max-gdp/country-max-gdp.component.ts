import {Component, OnInit} from '@angular/core';
import {CountryService} from "../../services/country-service.service";

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
export class CountryMaxGdpComponent implements OnInit{
  countryBestStats: CountryBestStats[] = [];

  constructor(private countryService: CountryService) {
  }

  ngOnInit() {
    this.countryService.getCountryBestStats().subscribe(data => {
      this.countryBestStats = data;
    })
  }
}
