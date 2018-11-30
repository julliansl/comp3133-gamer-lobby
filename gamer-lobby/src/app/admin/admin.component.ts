import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Users } from '../mock-users';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
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
