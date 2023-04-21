import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.model';
import { DataServiceService } from '../services/data-service.service';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-lifetime-stats',
  templateUrl: './lifetime-stats.component.html',
  styleUrls: ['./lifetime-stats.component.css']
})
export class LifetimeStatsComponent implements OnInit {
  caloriesBurned: number = 0;
  timeExercising: number = 0;
  distance: number = 0;
  user:User = {};

  constructor(
    private apiService : DataServiceService,
    private userService : UserDataService
    ) {}

  ngOnInit(): void {
    this.userService.currentMessage.subscribe(user => {
      this.user = JSON.parse(user);
      this.getDataFromAPI();
    });
  }

  getDataFromAPI(){
    this.apiService.getUserHealthData(<JSON>this.user).subscribe((response) =>{
      this.caloriesBurned = 0;
      this.timeExercising = 0;
      this.distance = 0;
      for (let i = 0; i < response.length; i++) {     
        this.caloriesBurned += <number>response[i].calories;
        this.timeExercising += <number>response[i].timeExercising;
        this.distance += <number>response[i].distance;
      }}, (error) => {
      console.log('Error: ', error)
    });
  }

}
