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
    userID:number = 0;

    @Output() calorieRingData = new EventEmitter<{calories: number, time: number, distance: number}>();
    
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
