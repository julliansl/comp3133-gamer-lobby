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
        this.games = this.games.sort((a, b): number => {
          return a['title'].localeCompare(b['title']);
        });
      });
  }

  get(): Observable<any> {
    return this.apiService.get(this.api_schema);
  }

  create(data: any = {}, auth: boolean = true): any {
    return this.apiService.create(this.api_schema, data, auth);
  }

  update(data: any = {}, auth: boolean = true): any {
    return this.apiService.update(this.api_schema, data, auth);
  }

  delete(data: any = {}, auth: boolean = true): any {
    return this.apiService.delete(this.api_schema, data, auth);
  }
}
