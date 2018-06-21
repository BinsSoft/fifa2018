import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
@Component({
  selector: 'app-pointtables',
  templateUrl: './pointtables.component.html',
  styleUrls: ['./pointtables.component.css']
})
export class PointtablesComponent implements OnInit {

  constructor(private api : ApiService) { }
  standList : any = {};
  standListGroup : any = [];
  ngOnInit() {
  	this.api.getPointTable().subscribe((response)=>{
			this.standList = response['standings'];
			this.standListGroup = Object.keys(this.standList);
			console.log(this.standList);
			console.log(this.standListGroup);
		});
  }

}
