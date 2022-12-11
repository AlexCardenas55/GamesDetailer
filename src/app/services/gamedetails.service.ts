import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GamedetailsService { 

  constructor(private http: HttpClient) { }

  // public getGameDetails(): Observable<any>{
  //   return this.http.get
  // }


  // public getCityDetails(cityCode: string): Observable<CitiesResponseModel> { // Expect response model
  //   return this.http.get<CitiesResponseModel>(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities/${cityCode}`, { // API URL
  //     headers: new HttpHeaders({
  //       'X-RapidAPI-Key': 'aa803d784fmshdc6b4cf35281382p16b366jsn1758e8020f60',
  //       'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  //     })
  //   }).pipe(take(1));
  // }
}

