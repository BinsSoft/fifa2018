import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';
import {appRoute} from './route.config';
import { AppComponent } from './app.component';
import {ApiService} from './api.service';
import { HomeComponent } from './home/home.component';
import { OwlModule } from 'ngx-owl-carousel';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { ResultComponent } from './result/result.component';
import { TeamsComponent } from './teams/teams.component';
import { PointtablesComponent } from './pointtables/pointtables.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UpcomingComponent,
    ResultComponent,
    TeamsComponent,
    PointtablesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute,{useHash:true}),
    OwlModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
