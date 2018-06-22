import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class ApiService {
	API_URL  = 'https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json';
	result : any = {}; 
	constructor(public http: HttpClient) { }

	callApi()
	{
		return this.http.get(this.API_URL).subscribe((response)=>{
			this.result = response;
			//console.log(this.result);
		})
	}

	getStadiums()
	{
		return this.result.stadiums;
	}

	getStadiumDetails(id)
	{
		let stadiums = this.getStadiums();
		let stadium = stadiums.filter((e)=>{
			return e.id == id;
		})
		return stadium[0];
	}

	getTeams()
	{
		return this.result.teams;
	}

	getTeamDetails(id)
	{
		let teams = this.getTeams();
		let team = teams.filter((e)=>{
			return e.id == id;
		})
		return team[0];
	}

	getGroups()
	{
		return this.result.groups;
	}
	getKnockouts()
	{
		return this.result.knockout;
	}


	getGroupMatches()
	{	
		var matches = [];
		var groups  = this.getGroups();
		var index = 1;
		for (let gIndex in groups) {
			let group = groups[gIndex];
			
			for (let match of group.matches) {
				match.groupName = "Group "+gIndex;
				match.home_team = this.getTeamDetails(match.home_team);
				match.away_team = this.getTeamDetails(match.away_team);
				match.stadium = this.getStadiumDetails(match.stadium);
				match.date = new Date(match.date);
				matches.push( match );
			}
		}
		matches.sort(this.compare);
		return matches;
	}

	getKnockoutMatches()
	{	
		var matches = [];
		var knockouts  = this.getKnockouts();
		for (let gIndex in knockouts) {
			let knockout = knockouts[gIndex];
			for (let match of knockout.matches) {
				match.groupName = knockout.name;
				let hTeam = this.getTeamDetails(match.home_team);

				if (hTeam == undefined) {
					if (typeof match.home_team == 'number') {
						match.home_team = match.home_team.toString();
						match.home_team = match.type+" "+match.home_team;
					} else {
						match.home_team = match.home_team.replace("_"," ");	
					}
				}
				let aTeam = this.getTeamDetails(match.away_team);
				if (aTeam == undefined ) {
					if (typeof match.away_team == 'number') {
						match.away_team = match.away_team.toString();
						match.away_team = match.type+" "+match.away_team;
					} else {
						match.away_team = match.away_team.replace("_"," ");	
					}
				}
				match.stadium = this.getStadiumDetails(match.stadium);
				match.date = new Date(match.date);
				matches.push( match );
			}
		}
		matches.sort(this.compare);
		return matches;
	}

	getScheduler()
	{
		var matches = [];
		for(let m of this.getGroupMatches()) {
			matches.push(m);
		}
		for(let m of this.getKnockoutMatches()) {
			matches.push(m);
		}
		return matches;
	}

	compare(a,b) {
	  if (a.date < b.date)
	    return -1;
	  if (a.date > b.date)
	    return 1;
	  return 0;
	}

	todaysGame() {
		let matches = this.getScheduler();
		return  matches.filter(e=>{
	  		return (e.date.toISOString().substring(0, 10) == new Date().toISOString().substring(0, 10));
	  	});
	}

	upcomingMatches()
	{
		let schedule = this.getScheduler();
		return  schedule.filter(e=>{
			return e.finished == false;
		});
	}
	resultMatches()
	{
		let schedule = this.getScheduler();
		return  schedule.filter(e=>{
			return e.finished == true;
		});
	}

	getPointTable()
	{
		let url = 'https://api.football-data.org/v1/competitions/467/leagueTable';
		return this.http.get(url, {
	  headers: new HttpHeaders({
	  	'X-Auth-Token' : '12bb1baac726490193b9bd6e06f2cb82'
	  })
	})
	}

	
}
