import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Users } from '../mock-users';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  
  constructor(private apiService: ApiService) { }

  getUserData(): void {
    this.apiService.get('users')
      .subscribe(response => {
        let data = response.json();
        for (let user in data) {
          let userObj = Object.assign(new User(), data[user]);
          this.users.push(userObj);
        }
      });
  }

  ngOnInit() {
    this.getUserData();
  }

}
