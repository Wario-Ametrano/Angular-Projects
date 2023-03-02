import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../service/newsapiservice.service';


@Component({
  selector: 'app-sportnews',
  templateUrl: './sportnews.component.html',
  styleUrls: ['./sportnews.component.css']
})
export class SportnewsComponent implements OnInit {

  constructor(private _service:NewsapiserviceService){}
  sportNewsDisplay:any = [];

  ngOnInit(): void {
    this._service.sportNews().subscribe((result)=>{
      this.sportNewsDisplay = result.articles;  
    })
    
  }
}
