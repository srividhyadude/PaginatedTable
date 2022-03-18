import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { prize } from 'src/app/model/prize';
@Injectable({
  providedIn: 'root'
})
export class NobelService {
  nobeldata:prize[]=[];
  constructor(private http:HttpClient) { }

  getPrizes():Observable<object>
  {
    return this.http.get("http://localhost:5000/prizes")
  }
  
}


