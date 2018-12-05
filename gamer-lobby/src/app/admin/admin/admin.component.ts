import { Component, OnInit } from '@angular/core';
import { User } from '../../users/user';
import { Game } from '../../game';
import { ApiService } from '../../services/api.service';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { GameService } from '../../services/game.service';
import { ActivatedRoute, Router } from '@angular/router';

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

  filteredUsers: User[];
  filteredGames: Game[];
  
  constructor(private apiService: ApiService, private userService: UserService, private gameService: GameService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.users$ = this.activatedRoute.paramMap.pipe(switchMap(params => {
      this.selectedUser = params.get('username');
      return of(this.userService.users);
    }));

    this.assignUsers();
    this.assignGames();
  }

  add(){
    this.router.navigateByUrl('/admin/add');
  }

  logout(){
    this.router.navigateByUrl('/users');
  }

  assignUsers() {
    this.filteredUsers = this.userService.users;
  }

  assignGames(){
    this.filteredGames = this.gameService.games;
  }

  searchFilter(value) {
    if (!value) {
      this.assignUsers();
      this.assignGames();
    }

    const regex = new RegExp(value, 'i');
    for (let key of Object.keys(this)){
      if (key === "filteredUsers" || key === "filteredGames") {
        let serviceName = key.toLowerCase().includes("user") ? "user" : "game";
        this[key] = this[`${serviceName}Service`][`${serviceName}s`].filter((item) => {
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
  }
}
