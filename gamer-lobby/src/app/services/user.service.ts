import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../users/user';
import { Observable, of } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public users: User[] = [];
  private api_schema = 'users';

  constructor(private apiService: ApiService) { }

  getData() {
    if (this.users.length == 0)
      this.updateData();
    return this.users;
  }

  updateData() {
    this.users = [];
    this.retrieveUserData();
  }

  retrieveUserData(): void {
    this.get().subscribe(response => {
        let data = response.json();
        for (let user in data) {
          let userObj = Object.assign(new User(), data[user]);
          this.users.push(userObj);
        }
      });
  }

  get(): Observable<any> {
    return this.apiService.get(this.api_schema);
  }

  create(data = {}) {
    this.apiService.create(this.api_schema, data);
  }

  update(data = {}) {
    this.apiService.update(this.api_schema, data);
  }

  delete(data = {}) {
    this.apiService.delete(this.api_schema, data);
  }
}