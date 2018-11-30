import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { ApiService } from '../services//api.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-users-invite',
  templateUrl: './users-invite.component.html',
  styleUrls: ['./users-invite.component.css']
})
export class UsersInviteComponent implements OnInit {
  games: Game[] = []

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }

  getGameData(): void {
    this.apiService.get('games')
      .subscribe(response => {
        let data = response.json();
        for (let game in data) {
          let userObj = Object.assign(new Game(), data[game]);
          this.games.push(userObj);
        }
      });
  }
  invite():void{
    this.router.navigateByUrl('/users');
  }

  cancel():void {
    this.router.navigateByUrl('/users');
  }

  ngOnInit() {
    this.getGameData();
  }

}
