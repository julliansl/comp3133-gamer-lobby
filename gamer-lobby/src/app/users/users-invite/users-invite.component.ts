import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { GameService } from '../../services/game.service';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-users-invite',
  host: {
    class: 'form content-block padding-25'
  },
  templateUrl: './users-invite.component.html',
  styleUrls: ['./users-invite.component.css']
})
export class UsersInviteComponent implements OnInit {
  user: any = new User();

  constructor(
    private userService: UserService, 
    private gameService: GameService,
    private route: ActivatedRoute, 
    private router: Router) { 
  }

  ngOnInit() { 
    this.route.params.subscribe(params => {
      setTimeout(() => {
        this.user = this.userService.getUser(params.username);
      }, 100);
    });
  }

  invite(form: NgForm): void {
    let values = form.value;
    values.status = "In Game";
    values._id = this.user._id; values.__v = this.user.__v;
    values.type = "invite";
    let update = this.userService.update(values, false);
    if (update) {
      update.subscribe(response => {
        if (response.json() && response.json().username) {
          this.router.navigateByUrl("/admin");
          this.userService.updateData();
        }
      });
    }
  }

  cancel(): void {
    this.router.navigateByUrl('/users');
  }
}
