import { Component, OnInit } from '@angular/core';
import { Platforms } from './platforms_Interface';
@Component({
  selector: 'app-platform-dropdown',
  templateUrl: './platform-dropdown.component.html',
  styleUrls: ['./platform-dropdown.component.css']
})
export class PlatformDropdownComponent implements OnInit {
  
  platforms: Platforms[];

  constructor() {
    this.platforms=[
      {name: 'All', code: 1},
      {name: 'PC', code: 2},
      {name: 'Xbox', code: 3},
      {name: 'Play Station', code: 4},
      {name: 'Mac', code: 5},
    ]
   }
  
  ngOnInit(): void {
  }

  onChange() {
    console.log(this.selectedPlatform)
  }
  selectedPlatform: any;
}
