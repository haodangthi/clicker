import { Component, OnInit } from '@angular/core';
import { Play } from 'src/play';
import { GameService } from '../game.service';

@Component({
  selector: 'app-my-games',
  templateUrl: './my-games.component.html',
  styleUrls: ['./my-games.component.scss']
})
export class MyGamesComponent implements OnInit {
  plays: Array<Play> = this.gameService.plays;
  constructor(private gameService: GameService) { }
  ngOnInit(): void {
  }

}
