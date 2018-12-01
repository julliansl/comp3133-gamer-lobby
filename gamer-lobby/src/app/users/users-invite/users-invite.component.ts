import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Game } from '../../game';
import { GameService } from '../../services/game.service';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-users-invite',
  templateUrl: './users-invite.component.html',
  styleUrls: ['./users-invite.component.css']
})
export class UsersInviteComponent implements OnInit {
  user: User;

  constructor(private userService: UserService,
      private gameService: GameService,
      private route: ActivatedRoute,
      private router: Router) {
    let username = this.route.snapshot.paramMap.get('username'); 
    this.user = this.userService.getUser(username);
  }

  invite(): void {
    this.router.navigateByUrl('/users');
  }

  cancel(): void {
    this.router.navigateByUrl('/users');
  }

  ngOnInit() { }
}
