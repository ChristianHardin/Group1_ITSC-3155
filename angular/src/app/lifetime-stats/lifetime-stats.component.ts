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
  data:any = '';

  constructor(
    private apiService : DataServiceService,
    private userService : UserDataService
    ) {}

  ngOnInit(): void {
    this.userService.currentMessage.subscribe(user => {
      this.user = JSON.parse(user);
      this.data = user;
      this.lifetimeStats();
    });
  }

  lifetimeStats() {
    this.apiService.getUserHealthData(JSON.parse(this.data)).subscribe((response) => {
      let obj = JSON.parse(JSON.stringify(response));
      this.caloriesBurned = obj[0].calories;
      this.distance = obj[0].distance;
      this.timeExercising = obj[0].timeExercising;
    });
  }
}
