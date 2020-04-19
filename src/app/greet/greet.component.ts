import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { GameService } from '../game.service';
import { Play } from 'src/play';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.scss']
})
export class GreetComponent implements OnInit {
  @Input() playerName: string;
  @Output() notify=new EventEmitter()
  userName:string=this.gameService.userName;


  constructor(private gameService: GameService) { }

  ngOnInit(): void {
  }
  getName(event) {
    
    
    this.gameService.userName = event.target.value;
    
    this.userName = event.target.value;
    console.log(this.gameService.userName)
    //this.notify.emit("emited sth")

  }
  // greetUser=(event)=>{
  //   console.log("hi")
  //   //this.greetedUser=true
  //   console.log(event)``
  // }
  


  

}
