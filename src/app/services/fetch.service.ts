import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchService {
  private baseUrl = 'http://localhost:8080'

  constructor(private http: HttpClient) {}

  get(url: string): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + url);
  }

  post(url: string, data: any): Observable<any[]> {
    return this.http.post<any[]>(this.baseUrl + url, data);
  }
}
