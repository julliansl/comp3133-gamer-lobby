import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Game } from '../../game';
import { GameService } from '../../services/game.service';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '../user';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-users-invite',
  templateUrl: './users-invite.component.html',
  styleUrls: ['./users-invite.component.css']
})
export class UsersInviteComponent implements OnInit {
  user: Observable<User>;

  constructor(private userService: UserService, private gameService: GameService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.gameService.updateData();
    this.user = this.route.paramMap.pipe(
      switchMap((param: ParamMap) => this.userService.getUser(param.get('username')))
    );
  }
  
  getUser(): void {
    const user = this.route.snapshot.paramMap.get('username');
    this.user = this.userService.getUser(user);
  }

  invite(): void {
    this.router.navigateByUrl('/users');
  }

  cancel(): void {
    this.router.navigateByUrl('/users');
  }
}
