import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '../user';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]>;
  selectedUser: number;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) { }
  
  ngOnInit() {
    this.userService.updateData();
    this.users$ = this.activatedRoute.paramMap.pipe(switchMap(params => {
      this.selectedUser = +params.get('username');
      return of(this.userService.users);
    }));
  }
}

