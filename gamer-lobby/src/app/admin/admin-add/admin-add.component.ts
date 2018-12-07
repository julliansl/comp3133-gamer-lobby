import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-add',
  host: {
    class: 'form content-block padding-25'
  },
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent implements OnInit {

  constructor(private authService: AuthService,
    private userService: UserService,
    private gameService: GameService, 
    private router: Router) { }

  ngOnInit() { 
    if (this.authService.authenticated()) {
      // do nothing
    } else {
      this.router.navigateByUrl("/users");
    }
  }

  add(form: NgForm): void {
    let values = form.value;
    let create = this.userService.create(values);
    if (create) {
      this.userService.create(values).subscribe(response => {
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
