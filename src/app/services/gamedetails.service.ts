import { Injectable } from '@angular/core';
import { Platforms } from './platforms_Interface';

@Injectable({
  providedIn: 'root'
})
export class GamedetailsService { 
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
selectedPlatform: any;
}

