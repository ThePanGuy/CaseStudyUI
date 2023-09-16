import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CountryService} from "../../services/country-service.service";

export interface CountryLanguages {
  countryName: string,
  languages: string[]
}

@Component({
  selector: 'app-country-languages',
  templateUrl: './country-languages.component.html',
  styleUrls: ['./country-languages.component.css']
})
export class CountryLanguagesComponent implements OnInit {
  countryId?: string;
  countryLanguages!: CountryLanguages;

  constructor(private route: ActivatedRoute, private countryService: CountryService) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.countryId = params['countryId'];
      //use country id to fetch the languages from back end
    })

    this.countryId &&
    this.countryService.getLanguages(this.countryId).subscribe(data => {
      this.countryLanguages = data;
    })
  }
}
