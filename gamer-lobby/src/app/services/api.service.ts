import { Injectable } from '@angular/core';
import { Http, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  http: Http = null;
  data: any = {};
  private api_url = 'http://localhost:3000/api/';

  constructor(http: Http, private authService: AuthService) { 
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

  create(api_schema: String, data: any = {}): any {
    if (this.authService.authenticated()) {
      data.token = this.authService.authInfo.token;
      let urlSearchParams = new URLSearchParams();
      for (let key in data)
        urlSearchParams.append(key, data[key]);
      return this.http.post(`${this.api_url}${api_schema}`, urlSearchParams);
    } else {
      return false;
    }
  }

  update(api_schema: String, data: any = {}): any {
    if (this.authService.authenticated()) {
      data.token = this.authService.authInfo.token;
      let urlSearchParams = new URLSearchParams();
      for (let key in data)
        urlSearchParams.append(key, data[key]);
      return this.http.put(`${this.api_url}${api_schema}`, urlSearchParams)
    } else {
      return false;
    }
  }

  delete(api_schema: String, data: any = {}): any {
    if (this.authService.authenticated()) {
      data.token = this.authService.authInfo.token;
      return this.http.delete(`${this.api_url}${api_schema}`, new RequestOptions({ body: data }))
        .subscribe(() => {
          console.log(`Deleted data in ${api_schema} collection.`);
        });
    } else {
      return false;
    }
  }
}