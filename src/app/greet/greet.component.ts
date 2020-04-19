import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { GameService } from '../game.service';


@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.scss']
})
export class GreetComponent implements OnInit {
  @Input() playerName: string;
  userName: string = this.gameService.userName;
  constructor(private gameService: GameService) { }

  ngOnInit(): void {
  }
  getName(event) {
    this.gameService.userName = event.target.value;
    this.userName = event.target.value;
  }
}
