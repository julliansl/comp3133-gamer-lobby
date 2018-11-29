import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  http: Http = null;
  data: any = {};
  private api_url = 'http://localhost:3000/api/';

  constructor(http: Http) { 
    this.http = http;
  }

  get(api_schema: String): Observable<any> {
    return this.http.get(`${this.api_url}${api_schema}`)
  }

  create(api_schema: String, data = {}) {
    this.http.post(`${this.api_url}${api_schema}`, JSON.stringify(data))
      .subscribe(() => {
        console.log(`Created data in ${api_schema} collection.`);
      });
  }
}
