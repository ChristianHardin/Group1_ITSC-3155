import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/models/user.model';
import { DataServiceService } from '../services/data-service.service';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-calorie-ring',
  templateUrl: './calorie-ring.component.html',
  styleUrls: ['./calorie-ring.component.css']
})
export class CalorieRingComponent implements OnInit{
  @Input() calories: number = 0;
  @Input() time: number = 0;
  @Input() distance: number = 0;
  caloriesStatic: number = 0;
  timeStatic: number = 0;
  distanceStatic: number = 0;
  calNeeded:number = 0;
  timeNeeded: number = 0;
  distNeeded: number = 0;

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
    this.apiService.getUserCurrentCount(JSON.parse(JSON.stringify(this.user))[0]).subscribe((response) =>{
      this.calories = 0;
      this.time = 0;
      this.distance = 0;
      this.caloriesStatic = JSON.parse(JSON.stringify(response))[0].calories;
      this.timeStatic = JSON.parse(JSON.stringify(response))[0].timeExercising;
      this.distanceStatic = JSON.parse(JSON.stringify(response))[0].distance;
      this.calories = JSON.parse(JSON.stringify(response))[0].calories;
      this.time = JSON.parse(JSON.stringify(response))[0].timeExercising;
      this.distance = JSON.parse(JSON.stringify(response))[0].distance;
      this.getGoalDataFromAPI();
    }, (error) => {
      console.log('Error: ', error)
    });
  }

  getGoalDataFromAPI() {
    this.apiService.getUserGoalData(JSON.parse(JSON.stringify(this.user))[0]).subscribe((response) => {
      this.calNeeded = JSON.parse(JSON.stringify(response))[0].caloriesToBurn;
      this.timeNeeded = JSON.parse(JSON.stringify(response))[0].timeToExercise;
      this.distNeeded = JSON.parse(JSON.stringify(response))[0].distanceToGo;
      this.calories = (this.calories / JSON.parse(JSON.stringify(response))[0].caloriesToBurn)*100;
      this.distance = (this.distance / JSON.parse(JSON.stringify(response))[0].distanceToGo)*100;
      this.time = (this.time / JSON.parse(JSON.stringify(response))[0].timeToExercise)*100;
      this.userService.refresh();
    });
  }

  get caloriesPercentage() {
    return Math.min(100, (this.calories / 500) * 100);
  }

  get timePercentage() {
    return Math.min(100, (this.time / 60) * 100);
  }

  get distancePercentage() {
    return Math.min(100, (this.distance / 5) * 100);
  }
}
