import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private api : ApiService) {

  }
  component : string = ''
  matchList : any  = [];
  ngOnInit() {
  	this.api.callApi();
  	setTimeout(()=>{
	  	let upcoming = this.api.todaysGame();
		if (upcoming.length > 0) {
			for(let m of upcoming) {
				this.matchList.push({
					id : m.name,
					name : "Match "+m.name,
					groupName : m.groupName,
					home_team : m.home_team,
					home_result : m.home_result,
					away_team : m.away_team,
					away_result : m.away_result,
					stadium : m.stadium,
					matchday : m.matchday,
					date : m.date

				});
			}
		};
		this.component = 'comming';
	},1000)
  }

}
