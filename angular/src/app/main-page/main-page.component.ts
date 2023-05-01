import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';
import { UserDataService } from '../services/user-data.service';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit{
  calories: number = 0;
  time: number = 0;
  distance: number = 0;

  totalCalories: number = 0;
  totalTime: number = 0;
  totalDistance: number = 0;
  userID: number = 0;
  user:User = {};
  
  constructor(
    private apiService : DataServiceService,
    private userService : UserDataService) {}

  ngOnInit(): void {
    this.userService.currentMessage.subscribe(user => {
      let userID = JSON.parse(user)[0].userID;     
      this.userID = userID;
      this.user = JSON.parse(user);
    });
  }

  onSubmit() {
    let data:any = {
      userID: this.userID,
      calories: this.calories,
      timeExercising: this.time,
      distance: this.distance
  }

    this.apiService.getUserCurrentCount(<JSON>data).subscribe((response) => {
      let tempCal = JSON.parse(JSON.stringify(response))[0].calories;
      let tempTime = JSON.parse(JSON.stringify(response))[0].timeExercising;
      let tempDist = JSON.parse(JSON.stringify(response))[0].distance;

      let mData:any = {
        userID: this.userID,
        calories: this.calories + tempCal,
        timeExercising: this.time + tempTime,
        distance: this.distance + tempDist
      }
      this.apiService.removeUserData(<JSON>mData).subscribe((response) => {
        this.apiService.addUserData(<JSON>mData).subscribe((response) => {
          this.updateHealth();
        });
      });
    });
  }

  updateHealth() {
    this.apiService.getUserHealthData(<JSON>this.user).subscribe((response) => {
      let obj = JSON.parse(JSON.stringify(response));
      const newData: any = {
        userID: obj[0].userID,
        calories: obj[0].calories + this.calories,
        timeExercising: obj[0].timeExercising + this.time,
        distance: obj[0].distance + this.distance,
        age: obj[0].age,
        weight: obj[0].weight,
        height: obj[0].height
      }
      this.apiService.removeHealthData(<JSON>newData).subscribe((response) => {
        this.apiService.healthDataInsert(<JSON>newData).subscribe((response) => {
          this.userService.changeUser(this.user);
        })
      });
    });
  }
}
