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
    const data:any = {
        userID: this.userID,
        date: "'2022-03-04'",
        calories: this.calories,
        timeExercising: this.time,
        distance: this.distance
    }
    this.apiService.addUserData(<JSON>data).subscribe((response) => {
      this.userService.changeUser(this.user);
    });
  }
}
