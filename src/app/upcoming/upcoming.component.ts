import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {

	constructor(private api : ApiService) { }
	matchList : any = [];
	ngOnInit() {
		this.api.callApi();
		setTimeout(()=>{
			this.matchList = this.api.upcomingMatches();
		},2000);
	}

}
