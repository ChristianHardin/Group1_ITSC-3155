import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calorie-ring',
  templateUrl: './calorie-ring.component.html',
  styleUrls: ['./calorie-ring.component.css']
})
export class CalorieRingComponent {
  @Input() calories: number = 0;
  @Input() time: number = 0;
  @Input() distance: number = 0;

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
