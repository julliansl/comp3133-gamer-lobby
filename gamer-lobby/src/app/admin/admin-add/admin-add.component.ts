import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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
    private gameService: GameService, 
    private router: Router) { }

  ngOnInit() { 
    if (this.authService.authenticated()) {
      // do nothing
    } else {
      this.router.navigateByUrl("/users");
    }
  }

  add(): void {
    this.router.navigateByUrl('/admin');
  }

  cancel(): void {
    this.router.navigateByUrl('/admin');
  }
}
