import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) {

  	apiurl="https://api.npoint.io/d8974e2a83b75da4e84d";

  	homeapi():Observable<ani>{
  		return this.http.get(`${this.apiurl}`);
  	}

   }
}
