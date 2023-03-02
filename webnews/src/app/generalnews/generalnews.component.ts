import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../service/newsapiservice.service';

@Component({
  selector: 'app-generalnews',
  templateUrl: './generalnews.component.html',
  styleUrls: ['./generalnews.component.css']
})
export class GeneralnewsComponent implements OnInit{

  constructor(private _service:NewsapiserviceService){}

  //display data
  generalNewsDisplay:any = [];

  ngOnInit():void{
    this._service.generalNews().subscribe((result)=>{
      this.generalNewsDisplay =result.articles;
    })
  }

}
