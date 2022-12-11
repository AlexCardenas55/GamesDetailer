import { Component, OnInit } from '@angular/core';
import { GamedetailsService } from '../services/gamedetails.service';
@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {

  constructor(private gamesService: GamedetailsService) { }
  games: number[] = [1,2,3,4,5,6]

  ngOnInit(): void {
  }

  // onClick(){
  //   console.log(this.gamesService.selectedPlatform);
  // }

}
