import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../service/newsapiservice.service';

@Component({
  selector: 'app-healthnews',
  templateUrl: './healthnews.component.html',
  styleUrls: ['./healthnews.component.css']
})
export class HealthnewsComponent implements OnInit {

  constructor(private _service:NewsapiserviceService){}

  healthDisplay:any = [];

  ngOnInit():void{

    this._service.healthNews().subscribe((result)=>{
      this.healthDisplay = result.articles;
    })
  }
}
