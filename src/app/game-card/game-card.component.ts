import { Component, OnInit } from '@angular/core';
import { GamedetailsService } from '../services/gamedetails.service';
import { GamesResponseModel } from '../models/games-response-model';
@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {

  constructor(private GamesService: GamedetailsService) { }
  games: number[] = [1,2,3,4,5,6]
  gameDetails: GamesResponseModel[];
  gameDescription: any
  ngOnInit(): void {
    this.getGamesAPI();
    // this.gameDetailsAPI();
  }

  // selectedPlatform = localStorage.getItem("platform");
  getGamesAPI(){
    this.GamesService.getGames().subscribe(
      data =>
      {
        this.gameDetails = data;
      }
    )
  }
  // gameDetailsAPI(){
  //   this.GamesService.gameDetails(452).subscribe(
  //     data =>
  //     {
  //       this.gameDescription = data;
  //     }
  //     )
  // }
  onClick(){
    console.log(localStorage.getItem("platform"));
    // console.log(this.gameDetailsAPI)
  }
}
