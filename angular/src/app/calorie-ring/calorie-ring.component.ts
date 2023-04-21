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
      this.calories = 0;
      this.time = 0;
      this.distance = 0;
      for (let i = 0; i < response.length; i++) {     
        this.calories += <number>response[i].calories;
        this.time += <number>response[i].timeExercising;
        this.distance += <number>response[i].distance;
      }
      
    }, (error) => {
      console.log('Error: ', error)
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
