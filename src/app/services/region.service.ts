import {Observable} from "rxjs";
import {Region} from "../country/country-info/country-info.component";
import {Injectable} from "@angular/core";
import {FetchService} from "./fetch.service";

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private fetchService: FetchService) {
  }

  getAvailableRegions(): Observable<Region[]> {
    return this.fetchService.get<Region[]>('/regions')
  }
}
