import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { AuthenticatedUser } from '../models/authenticated-user';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authInfo: AuthenticatedUser = null;
  private api_url = "http://localhost:3000/api/";
  private api_schema = "auth";
  private api_operations = {
    create: "/create",
    delete: "/delete"
  };

  constructor(private http: Http,
    private router: Router) { }

  authenticated(): boolean { return this.authInfo != null; }

  login(username: string, password: string) {
    this.authenticateUser({ username: username, password: password });
  }

  logout() {
    this.authInfo = null;
    if (!this.authInfo) {
      this.router.navigateByUrl("/login");
    }
  }

  authenticateUser(userInfo) {
    this.http.post(`${this.api_url}${this.api_schema}`, userInfo).subscribe((response) => {
      if (response.json() && response.json()['username']) {
        this.authInfo = Object.assign(new AuthenticatedUser(), response.json());
        if (this.authInfo != null) {
          this.router.navigateByUrl("/admin");
          console.log(`Authentication: User authenticated as ${this.authInfo.username}`);
        }
      } else {
        console.log(`Authentication: Invalid Username or Password`);
      }
    });
  }
}
