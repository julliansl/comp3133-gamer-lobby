import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

import { User } from './user';
import { Users } from './userlist';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = Users.users;
  
  constructor(private apiService: ApiService) { }

  getUserData(): Observable<User[]> {
    return of (users);
  }
}
