import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {

  constructor(private _http:HttpClient) { }

  //topNewsApiUrl
  newsApiUrl="https://newsapi.org/v2/top-headlines?country=it&apiKey=1c5e2237fcd342bf86e1cc62c9d23654";

  //generalNewsApiUrl
  generalApiUrl="https://newsapi.org/v2/top-headlines?country=it&category=general&apiKey=1c5e2237fcd342bf86e1cc62c9d23654";

  //healthNewsApiUrl
  healthApiUrl="https://newsapi.org/v2/top-headlines?country=it&category=health&apiKey=1c5e2237fcd342bf86e1cc62c9d23654";

  //entertainmentNewsApiUrl
  entertainmentApiUrl="https://newsapi.org/v2/top-headlines?country=it&category=entertainment&apiKey=1c5e2237fcd342bf86e1cc62c9d23654";
 
  //techNewsApiUrl
  techApiUrl="https://newsapi.org/v2/top-headlines?country=it&category=technology&apiKey=1c5e2237fcd342bf86e1cc62c9d23654";

  //businessNewsApiUrl
  businessApiUrl="https://newsapi.org/v2/top-headlines?country=it&category=business&apiKey=1c5e2237fcd342bf86e1cc62c9d23654";

  //sportnNewsApiUrl
  sportApiUrl="https://newsapi.org/v2/top-headlines?country=it&category=sport&apiKey=1c5e2237fcd342bf86e1cc62c9d23654";



  //topHeading
  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }
  //GeneralNews
  generalNews():Observable<any>
  {
    return this._http.get(this.generalApiUrl);
  }
  //EntertainmentNews
  entertainmentNews():Observable<any>
  {
    return this._http.get(this.entertainmentApiUrl);
  }
   //SportNews
  healthNews():Observable<any>
  {
    return this._http.get(this.healthApiUrl);
  }

    //techNews
  techNews():Observable<any>
  {
    return this._http.get(this.techApiUrl);
  }

  //businessNews
  businessNews():Observable<any>
  {
    return this._http.get(this.businessApiUrl);
  }
   //SportNews
  sportNews():Observable<any>
  {
    return this._http.get(this.sportApiUrl);
  }

}
