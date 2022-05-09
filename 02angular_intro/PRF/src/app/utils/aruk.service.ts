import { Coffee } from './../coffee';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArukService {

  constructor(private http: HttpClient) { }

  listaru() {
    return this.http.get<Coffee[]>(environment.serverUrl + 'arukereso');
  }

  updatearu(nev: string, ar: number, orszag: string, mennyiseg: number, darab: number){
    return this.http.put<Coffee[]>(environment.serverUrl + 'arukereso', {nev: nev,ar: ar, orszag: orszag, mennyiseg: mennyiseg, darab: darab});
  }

}
