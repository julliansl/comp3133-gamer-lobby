import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, of } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http: Http = null;
  data: any = {};
  private api_schema = 'users';

  constructor(private apiService: ApiService) { }

  get(): Observable<any> {
    return this.apiService.get(this.api_schema);
  }

  /*create(api_schema: String, data = {}) {
    this.http.post(`${this.api_url}${api_schema}`, JSON.stringify(data))
      .subscribe(() => {
        console.log(`Created data in ${api_schema} collection.`);
      });
  }

  update(api_schema: String, data = {}) {
    this.http.put(`${this.api_url}${api_schema}`, JSON.stringify(data))
      .subscribe(() => {
        console.log(`Updated data in ${api_schema} collection.`);
      });
  }

  delete(api_schema: String, data = {}) {
    this.http.delete(`${this.api_url}${api_schema}`, JSON.stringify(data))
      .subscribe(() => {
        console.log(`Deleted data in ${api_schema} collection.`);
      });
  }*/
}