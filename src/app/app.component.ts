import { Component } from '@angular/core';
import {ApiService} from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';
	constructor(private api: ApiService)
	{
		// /this.api.callApi();
		/*setTimeout(()=>{
		console.log(this.api.getStadiums());
		console.log(this.api.getTeams());
		console.log(this.api.getGroups());
		console.log(this.api.getGroupMatches());
		console.log(this.api.getKnockoutMatches());
		console.log(this.api.getTeamDetails(2));
		console.log(this.api.getStadiumDetails(2));
		console.log(this.api.getScheduler());

		
	},2000);*/
	}


}
