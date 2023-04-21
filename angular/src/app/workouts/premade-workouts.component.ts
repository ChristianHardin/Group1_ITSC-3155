import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'premade-workout',
    templateUrl: './premade-workouts.component.html',
    styleUrls: ['./premade-workouts.component.css']
})

export class PremadeWorkoutComponent{
    title = "Premade Workouts:";
    calories = 0;
    time =0;
    distance = 0;
    @Output() calorieRingData = new EventEmitter<{calories: number, time: number, distance: number}>();
    
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
    }
}
