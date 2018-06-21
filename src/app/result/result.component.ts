import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

	constructor(private api : ApiService) { }

	matchList : any = [];
	ngOnInit() {
		this.api.callApi();
		setTimeout(()=>{
			this.matchList = this.api.resultMatches();
		},2000);
	}

}
