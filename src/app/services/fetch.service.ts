import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchService {
  private baseUrl = 'http://localhost:8080'

  constructor(private http: HttpClient) {
  }

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(this.baseUrl + url);
  }

  post<T>(url: string, data: any): Observable<T> {
    return this.http.post<T>(this.baseUrl + url, data);
  }
}
