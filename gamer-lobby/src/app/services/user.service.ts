import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';

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
    this.retrieveAllUserData();
  }

  getUser(username: string): User {
    if (this.users.length == 0)
      this.updateData();
    for (let user of this.users) {
      if (user.username == username) {
        return user;
      }
    }
  }

  retrieveAllUserData(): void {
    this.get().subscribe(response => {
        let data = response.json();
        for (let user in data) {
          let userObj = Object.assign(new User(), data[user]);
          this.users.push(userObj);
        }
        this.users = this.users.sort((a, b): number => {
          return a['status'].localeCompare(b['status']);
        });
      });
  }

  get(): Observable<any> {
    return this.apiService.get(this.api_schema);
  }

  create(data: any = {}, auth: boolean = true) {
    return this.apiService.create(this.api_schema, data, auth);
  }

  update(data: any = {}, auth: boolean = true) {
    return this.apiService.update(this.api_schema, data, auth);
  }

  delete(data: any = {}, auth: boolean = true) {
    return this.apiService.delete(this.api_schema, data, auth);
  }
}