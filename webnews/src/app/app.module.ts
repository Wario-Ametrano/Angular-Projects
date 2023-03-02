import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';

import { NewsapiserviceService } from './service/newsapiservice.service';
import { TechnewsComponent } from './technews/technews.component';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { GeneralnewsComponent } from './generalnews/generalnews.component';
import { SportnewsComponent } from './sportnews/sportnews.component';
import { MeteonewsComponent } from './meteonews/meteonews.component';
import { HealthnewsComponent } from './healthnews/healthnews.component';

// for HttpClient import:
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { DateComponent } from './date/date.component';
import { HttpClientModule } from '@angular/common/http';
import { EntertainmentnewsComponent } from './entertainmentnews/entertainmentnews.component';

@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TechnewsComponent,
    BusinessnewsComponent,
    DateComponent,
    SportnewsComponent,
    GeneralnewsComponent,
    MeteonewsComponent,
    HealthnewsComponent,
    EntertainmentnewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule
  ],
  providers: [NewsapiserviceService],
  bootstrap: [AppComponent],
})
export class AppModule { }
