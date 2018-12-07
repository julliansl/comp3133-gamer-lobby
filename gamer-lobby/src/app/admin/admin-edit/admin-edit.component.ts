import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { GameService } from '../../services/game.service';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-edit',
  host: {
    class: 'form content-block padding-25'
  },
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {
  user: any = new User();

  constructor(private authService: AuthService, 
    private userService: UserService, 
    private gameService: GameService,
    private router: Router, 
    private route: ActivatedRoute) { 
  }

  ngOnInit() {
    if (this.authService.authenticated()) {
      this.route.params.subscribe(params => {
        setTimeout(() => {
          this.user = this.userService.getUser(params.username);
        }, 100);
      });
    } else {
      this.router.navigateByUrl("/users");
    }
  }

  update(form: NgForm): void {
    let values = form.value;
    values._id = this.user._id; values.__v = this.user.__v;
    let update = this.userService.update(values);
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
    this.router.navigateByUrl('/admin');
  }

}
