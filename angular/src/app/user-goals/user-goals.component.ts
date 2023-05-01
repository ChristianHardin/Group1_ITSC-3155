import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';
import { UserDataService } from '../services/user-data.service';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-user-goals',
  templateUrl: './user-goals.component.html',
  styleUrls: ['./user-goals.component.css']
})
export class UserGoalsComponent implements OnInit {
  user:User = {};
  calories:number = 0;
  time:number = 0;
  distance:number = 0;

  constructor(
    private apiService : DataServiceService,
    private userService : UserDataService) {}
  
  ngOnInit(): void {
    this.userService.currentMessage.subscribe(user => {
      this.user = JSON.parse(user);
    });
  }

  onSubmit() {
    let obj = JSON.parse(JSON.stringify(this.user))
    let mData:any = {
      userID: obj[0].userID,
      caloriesToBurn: this.calories,
      timeToExercise: this.time,
      distanceToGo: this.distance
    }
    this.apiService.removeUserGoalData(obj[0]).subscribe((response) => {
      this.apiService.insertUserGoalData(<JSON>mData).subscribe((response) => {})
    });

    let nData:any = {
      userID: obj[0].userID,
      calories: 0,
      timeExercising: 0,
      distance: 0
    }

    this.apiService.removeUserData(obj[0]).subscribe((response) => {
      this.apiService.addUserData(<JSON>nData).subscribe((response) => {
        this.userService.changeUser(this.user);
      });
    });
  }
}
