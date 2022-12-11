import { Component, OnInit } from '@angular/core';
import { GamedetailsService } from '../services/gamedetails.service';
@Component({
  selector: 'app-platform-dropdown',
  templateUrl: './platform-dropdown.component.html',
  styleUrls: ['./platform-dropdown.component.css']
})
export class PlatformDropdownComponent implements OnInit {
  selectedPlatform: any;
  constructor(private GamesService: GamedetailsService){}

  ngOnInit(): void {
  }

  platforms = this.GamesService.platforms;
  
  onChange() {
    this.GamesService.selectedPlatform = this.selectedPlatform;
  }



}

