import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { AuthenticatedUser } from '../models/authenticated-user';
import { typeWithParameters } from '@angular/compiler/src/render3/util';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authInfo: AuthenticatedUser = null;
  userAuthenticated: boolean = true;

  constructor(private apiService: ApiService) { }

  authenticated(): boolean {
    return this.userAuthenticated;
  }

  login(username: string, password: string) {
    
  }

  logout() {

  }
}
