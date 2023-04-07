import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifetime-stats',
  templateUrl: './lifetime-stats.component.html',
  styleUrls: ['./lifetime-stats.component.css']
})
export class LifetimeStatsComponent implements OnInit {
  caloriesBurned: number = 0;
  timeExercising: number = 0;
  distance: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
