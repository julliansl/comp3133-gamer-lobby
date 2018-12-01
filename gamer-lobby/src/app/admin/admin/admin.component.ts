import { Component, OnInit } from '@angular/core';
import { User } from '../../users/user';
import { ApiService } from '../../services/api.service';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { GameService } from '../../services/game.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-admin',
  host: {
    class: 'content-block padding-25'
  },
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users$: Observable<User[]>;
  selectedUser: string;
  
  constructor(private apiService: ApiService, private userService: UserService, private gameService: GameService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.users$ = this.activatedRoute.paramMap.pipe(switchMap(params => {
      this.selectedUser = params.get('username');
      return of(this.userService.users);
    }));
  }

  add(){
    this.router.navigateByUrl('/admin/add');
  }

  logout(){
    this.router.navigateByUrl('/users');
  }
}
