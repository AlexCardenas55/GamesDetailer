import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { GamesResponseModel } from '../models/games-response-model';

@Injectable({
  providedIn: 'root'
})
export class GamedetailsService { 

  constructor(private http: HttpClient) { 

}

// public getStates(countryID: string): Observable<CitiesResponseModel>{
//   return this.http.get<CitiesResponseModel>(`https://wft-geo-db.p.rapidapi.com/v1/geo/countries/${countryID}/regions`, {
//     headers: new HttpHeaders({
//       'X-RapidAPI-Key': 'aa803d784fmshdc6b4cf35281382p16b366jsn1758e8020f60',
//       'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
//     }),
//     params: new HttpParams().set('limit', 100)
//     }).pipe(take(1));
// }

public getGames(): Observable<any> {
  return this.http.get<any>(`https://free-to-play-games-database.p.rapidapi.com/api/games`,{
    headers: new HttpHeaders({
      'X-RapidAPI-Key': 'aa803d784fmshdc6b4cf35281382p16b366jsn1758e8020f60',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
    })
  }).pipe(take(1));
}

// public gameDetails(id: number): Observable<any> {
//   return this.http.get<any>(`https://www.freetogame.com/api/game?id=${id}`).pipe(take(1))
// }
}

