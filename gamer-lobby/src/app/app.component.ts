import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { UserService } from './services/user.service';
import { GameService } from './services/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService, UserService, GameService]
})
export class AppComponent implements OnInit {
  title = 'Friend List';
  constructor(
    private userService: UserService,
    private gameService: GameService
  ) { }
  
  ngOnInit() {
    this.userService.updateData();
    this.gameService.updateData();
  }
}
