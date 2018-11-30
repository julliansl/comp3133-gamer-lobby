import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ApiService } from '../../services/api.service';
import { Observable, } from 'rxjs';
import { UserService } from '../user.service';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  
  constructor(private apiService: ApiService, private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUserData().subscribe(users => this.users = users);
  }

}
