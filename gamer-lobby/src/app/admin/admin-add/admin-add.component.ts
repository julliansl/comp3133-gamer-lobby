import { Component, OnInit } from '@angular/core';
import { GameService} from '../../services/game.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent implements OnInit {

  constructor(private gameService: GameService, private router: Router) { }

  ngOnInit() {
  }

  add(): void {
    this.router.navigateByUrl('/admin');
  }

  cancel(): void {
    this.router.navigateByUrl('/admin');
  }
}
