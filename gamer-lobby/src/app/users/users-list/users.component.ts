import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '../../models/user';
import { switchMap } from 'rxjs/operators';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  host: {
    class: 'content-block padding-25'
  },
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]>;
  filteredUsers: User[];
  selectedUser: string;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) { }
  
  ngOnInit() {
    this.users$ = this.activatedRoute.paramMap.pipe(switchMap(params => {
      this.selectedUser = params.get('username');
      return of(this.userService.users);
    }));

    this.assignUsers();
  }

  assignUsers() {
    this.filteredUsers = this.userService.users;
  }

  searchFilter(value) {
    if (!value) this.assignUsers();
    this.filteredUsers = this.userService.users.filter((item) => {
      const regex = new RegExp(value, 'i');
      if (value == "")
        return true;
      for (let key in item) {
        if (regex.test(item[key]))
          return true;
      }
      return false;
    });
  }
}

