import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { User } from 'src/models/user.model';
import { DataServiceService } from '../services/data-service.service';
import { UserDataService } from '../services/user-data.service';

@Component({
    selector: 'premade-workout',
    templateUrl: './premade-workouts.component.html',
    styleUrls: ['./premade-workouts.component.css']
})

export class PremadeWorkoutComponent implements OnInit{
    title = "Premade Workouts:";
    calories = 0;
    time =0;
    distance = 0;
    user:User = {};
    data:any = '';

    
    constructor(
        private apiService : DataServiceService,
        private userService : UserDataService) {}

    ngOnInit(): void {
        this.userService.currentMessage.subscribe(user => {
            this.user = JSON.parse(user);
            this.data = user
        });
    }

    processWorkout(workoutType:string){
        switch(workoutType){
            case "5-mile-run":{
                this.calories = 740;
                this.time = 50;
                this.distance = 5;
                break;
            }
            case "swimming":{
                this.calories = 383;
                this.time = 45;
                this.distance = 4;
                break;
            }
            case "weight-lifting":{
                this.calories = 650;
                this.time = 60;
                this.distance = 0;
                break;
            }
            case "yoga":{
                this.calories = 460;
                this.time = 90;
                this.distance = 0;
                break;
            }
        }
        alert("You have recorded a workout with the following statistics: \n\ncalories: "+this.calories+"\ntime: "+this.time+"\ndistance: "+this.distance);
        this.apiService.getUserCurrentCount(JSON.parse(this.data)[0]).subscribe((response) => {   
            let obj = JSON.parse(JSON.stringify(response));
            let mData:any = {
                userID: obj[0].userID,
                calories: obj[0].calories + this.calories,
                timeExercising: obj[0].timeExercising + this.time,
                distance: obj[0].distance + this.distance
            }
            this.apiService.removeUserData(<JSON>mData).subscribe((response) => {
                this.apiService.addUserData(<JSON>mData).subscribe((response) => {
                    this.updateHealth(mData)
                });
            });
        });
    }
    updateHealth(data: any) {
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
