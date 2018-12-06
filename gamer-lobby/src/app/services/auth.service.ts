import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { AuthenticatedUser } from '../models/authenticated-user';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authInfo: AuthenticatedUser = null;
  private api_schema = "auth";

  constructor(private apiService: ApiService,
    private router: Router) { }

  authenticated(): boolean {
    return this.authInfo !== null;
  }

  login(form: NgForm) {//username: string, password: string) {
    console.log(JSON.stringify(form.value));
    //this.authenticateUser({ username: username, password: password });
    if (this.authInfo !== null) {
      this.router.navigateByUrl("/admin");
    }
  }

  logout() {
    this.authInfo = null;
    if (!this.authInfo) {
      this.router.navigateByUrl("/users");
    }
  }

  authenticateUser(userInfo) {
    this.apiService.post(this.api_schema, userInfo).subscribe((response) =>{
      this.authInfo = Object.assign(new AuthenticatedUser(), response)
    });
  }
}
