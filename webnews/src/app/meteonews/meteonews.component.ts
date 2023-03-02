import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-meteonews',
  templateUrl: './meteonews.component.html',
  styleUrls: ['./meteonews.component.css']
})
export class MeteonewsComponent implements OnInit{

  myWeather:any;

  today:string ='';
  temperature:number = 0;
  feelsLikeTemp:number = 0;
  humidity:number=0;
  summary:string ='';
  iconURL:string = '';
  city:string ='Naples';
  units:string='metric';

  tomorrowDay:string='';
  tomorrowIconURL:string='';
  secondDay:string='';
  secondIconURL:string='';
  thirdDay:string='';
  thirdIconURL:string='';
  fourthDay:string='';
  fourthIconURL:string='';
  

  constructor(private weeatherService: WeatherService){}

  ngOnInit(): void
  {
    this.weeatherService.getWeather(this.city,this.units).subscribe({
      next:(res) =>{
        console.log(res)
        this.myWeather = res;
        //info od today
        console.log(this.myWeather);
        this.today = this.myWeather.list[0].dt_txt;
        this.temperature = this.myWeather.list[0].main.temp;
        this.feelsLikeTemp = this.myWeather.list[0].main.feels_like;
        this.humidity = this.myWeather.list[0].main.humidity;
        this.summary = this.myWeather.list[0].weather[0].main;
        this.iconURL = 'http://openweathermap.org/img/wn/'+ this.myWeather.list[0].weather[0].icon + '@2x.png';

        //future day info
        //day 1
        this.tomorrowDay = this.myWeather.list[5].dt_txt;
        this.tomorrowIconURL = 'http://openweathermap.org/img/wn/'+ this.myWeather.list[5].weather[0].icon + '@2x.png';

        //day 2
        this.secondDay = this.myWeather.list[12].dt_txt;
        this.secondIconURL = 'http://openweathermap.org/img/wn/'+ this.myWeather.list[12].weather[0].icon + '@2x.png';

        //day 3
        this.thirdDay = this.myWeather.list[20].dt_txt;
        this.thirdIconURL = 'http://openweathermap.org/img/wn/'+ this.myWeather.list[20].weather[0].icon + '@2x.png';

         //day 4
         this.fourthDay = this.myWeather.list[28].dt_txt;
         this.fourthIconURL = 'http://openweathermap.org/img/wn/'+ this.myWeather.list[28].weather[0].icon + '@2x.png';
      },
      error:(error) => console.log(error.message),
      complete:()=> console.info('API Call COmpleted')
    })
  }

  

}
