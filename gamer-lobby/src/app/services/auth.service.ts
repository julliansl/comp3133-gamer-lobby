import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { AuthenticatedUser } from '../models/authenticated-user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authInfo: AuthenticatedUser = null;
  authenticated: boolean = false;

  constructor(private apiService: ApiService) { }
}
