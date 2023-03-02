import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../service/newsapiservice.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit{

  constructor(private _service:NewsapiserviceService){}

  techNewsDisplay:any = [];

  ngOnInit(): void{
    this._service.techNews().subscribe((result)=>{
      this.techNewsDisplay = result.articles;
    })
  }
}
