import { Injectable } from '@angular/core';
import {Play} from '../play'

@Injectable({
  providedIn: 'root'
})
export class GameService {
  plays:Array<Play>=[]
  play:Play
  userName:string;
  constructor() { }
  
  addPlay=(play)=>{this.plays.push(play);console.log(this.plays,this.userName); }
  setUserName=(name)=>this.userName=name;
  getAllPlaysNumber=()=>this.plays.length;

  
  
}
