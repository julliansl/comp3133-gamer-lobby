import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { UserService } from './services/user.service';
import { GameService } from './services/game.service';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService, UserService, GameService, AuthService]
})
export class AppComponent implements OnInit {
  title = 'Friend List';
  constructor(
    private userService: UserService,
    private gameService: GameService,
    private authService: AuthService,
    private router: Router
  ) { }
  
  ngOnInit() {
    this.userService.updateData();
    this.gameService.updateData();
  }
}
