import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../service/newsapiservice.service';

@Component({
  selector: 'app-entertainmentnews',
  templateUrl: './entertainmentnews.component.html',
  styleUrls: ['./entertainmentnews.component.css']
})
export class EntertainmentnewsComponent implements OnInit{

  constructor(private _service:NewsapiserviceService){}

  entertainmentDisplay:any = [];

  ngOnInit(): void {
    this._service.entertainmentNews().subscribe((result)=>{
      this.entertainmentDisplay = result.articles;
    })
  }
}
