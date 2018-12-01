import { Component, OnInit } from '@angular/core';
import { User } from '../../users/user';
import { GameService } from '../../services/game.service';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {
  user: User = new User();

  constructor(private gameService: GameService, private userService: UserService, private router : Router, private route: ActivatedRoute) { }

  ngOnInit() {
    let username = this.route.snapshot.paramMap.get('username');
    this.user = this.userService.getUser(username);
  }

  update(): void {
    this.router.navigateByUrl('/admin');
  }

  cancel(): void {
    this.router.navigateByUrl('/admin');
  }

}
