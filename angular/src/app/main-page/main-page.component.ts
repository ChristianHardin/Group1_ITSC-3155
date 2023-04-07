import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  calories: number = 0;
  time: number = 0;
  distance: number = 0;

  totalCalories: number = 0;
  totalTime: number = 0;
  totalDistance: number = 0;

  onSubmit() {
    this.totalCalories += this.calories;
    this.totalTime += this.time;
    this.totalDistance += this.distance;

    this.calories = 0;
    this.time = 0;
    this.distance = 0;
  }
}
