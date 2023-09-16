import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CountryService} from "../../services/country-service.service";
import {Subscription} from "rxjs";

export interface CountryLanguages {
  countryName: string,
  languages: string[]
}

@Component({
  selector: 'app-country-languages',
  templateUrl: './country-languages.component.html',
  styleUrls: ['./country-languages.component.css']
})
export class CountryLanguagesComponent implements OnInit, OnDestroy {
  countryId?: string;
  countryLanguages!: CountryLanguages;
  serviceSubscription?: Subscription;

  constructor(private route: ActivatedRoute, private countryService: CountryService) {

  }

  ngOnInit() {
    debugger
    this.route.params.subscribe(params => {
      this.countryId = params['countryId'];
    })

    if (this.countryId) {
      this.serviceSubscription = this.countryService.getLanguages(this.countryId).subscribe(data => {
        debugger
        this.countryLanguages = data;
      })
    }
  }

  ngOnDestroy(): void {
    this.serviceSubscription?.unsubscribe();
  }
}
