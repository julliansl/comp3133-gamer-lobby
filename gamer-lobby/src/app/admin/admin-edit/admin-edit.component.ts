import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { GameService } from '../../services/game.service';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-edit',
  host: {
    class: 'form content-block padding-25'
  },
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {
  user: User = new User();

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

  update(): void {
    this.router.navigateByUrl('/admin');
  }

  cancel(): void {
    this.router.navigateByUrl('/admin');
  }

}
