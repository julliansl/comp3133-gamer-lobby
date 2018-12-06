import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Game } from '../models/game';
import { Observable, of } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public games: Game[] = [];
  private api_schema = 'games';

  constructor(private apiService: ApiService) { }

  getData() {
    if (this.games.length == 0)
      this.updateData();
    return this.games;
  }

  updateData() {
    this.games = [];
    this.retrieveGameData();
  }

  retrieveGameData(): void {
    this.get().subscribe(response => {
        let data = response.json();
        for (let game in data) {
          let userObj = Object.assign(new Game(), data[game]);
          this.games.push(userObj);
        }
      });
  }

  get(): Observable<any> {
    return this.apiService.get(this.api_schema);
  }

  create(data: any = {}) {
    this.apiService.create(this.api_schema, data);
  }

  update(data: any = {}) {
    this.apiService.update(this.api_schema, data);
  }

  delete(data: any = {}) {
    this.apiService.delete(this.api_schema, data);
  }
}
