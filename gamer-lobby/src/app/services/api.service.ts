import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
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

  post(api_schema: String, data: any = {}): Observable<any> {
    let urlSearchParams = new URLSearchParams();
    for (let key in data)
      urlSearchParams.append(key, data[key]);
    return this.http.post(`${this.api_url}${api_schema}`, urlSearchParams);
  }

  create(api_schema: String, data = {}) {
    let urlSearchParams = new URLSearchParams();
    for (let key in data)
      urlSearchParams.append(key, data[key]);
    this.http.post(`${this.api_url}${api_schema}`, urlSearchParams)
      .subscribe(() => {
        console.log(`Created data in ${api_schema} collection.`);
      });
  }

  update(api_schema: String, data = {}) {
    let urlSearchParams = new URLSearchParams();
    for (let key in data)
      urlSearchParams.append(key, data[key]);
    this.http.put(`${this.api_url}${api_schema}`, urlSearchParams)
      .subscribe(() => {
        console.log(`Updated data in ${api_schema} collection.`);
      });
  }

  delete(api_schema: String, data = {}) {
    this.http.delete(`${this.api_url}${api_schema}`, JSON.stringify(data))
      .subscribe(() => {
        console.log(`Deleted data in ${api_schema} collection.`);
      });
  }
}