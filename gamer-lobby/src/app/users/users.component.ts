import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Users } from '../mock-users';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = Users;
  
  constructor() { }

  ngOnInit() {
  }

}
