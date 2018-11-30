import { Component, OnInit } from '@angular/core';
import { Game } from '../game';

@Component({
  selector: 'app-users-invite',
  templateUrl: './users-invite.component.html',
  styleUrls: ['./users-invite.component.css']
})
export class UsersInviteComponent implements OnInit {
  games: Game[] = []

  constructor() { }

  ngOnInit() {
  }

}
