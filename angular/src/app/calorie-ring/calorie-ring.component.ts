import { Component, Input, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-calorie-ring',
  templateUrl: './calorie-ring.component.html',
  styleUrls: ['./calorie-ring.component.css']
})
export class CalorieRingComponent implements OnInit{
  @Input() calories: number = 0;
  @Input() time: number = 0;
  @Input() distance: number = 0;
  temp:Object = new Object;

  constructor(private service : DataServiceService) {}

  ngOnInit(): void {
    this.getDataFromAPI();
  }

  getDataFromAPI(){
    this.service.getHealthData().subscribe((response) =>{
      console.log('Data Recieved: ' + response)
      console.log(response[0])
      this.calories = <number>response[0].calories;
      this.time = <number>response[0].timeExercising;
      this.distance = <number>response[0].distance;
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
