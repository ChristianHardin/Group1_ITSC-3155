import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.model';
import { DataServiceService } from '../services/data-service.service';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-height-age-weight',
  templateUrl: './height-age-weight.component.html',
  styleUrls: ['./height-age-weight.component.css']
})
export class HeightAgeWeightComponent implements OnInit{
  title = "Biometrics"
  height:string = 'N/A';
  weight:string = 'N/A';
  age:string = 'N/A';
  user:User = {};
  data:any = '';

  constructor(
    private apiService : DataServiceService,
    private userService : UserDataService
    ) { }

    ngOnInit(): void {
      this.userService.currentMessage.subscribe(user => {
        this.user = JSON.parse(user);
        this.data = user
        this.getHealthData();
      });
    }

    getHealthData() {
      this.apiService.getUserHealthData(JSON.parse(this.data)).subscribe((response) => {
        let obj = JSON.parse(JSON.stringify(response));
        this.height = obj[0].height;
        this.weight = obj[0].weight;
        this.age = obj[0].age;
      });
    }

    onSubmit() {
      this.apiService.getUserHealthData(JSON.parse(this.data)).subscribe((response) => {
        let obj = JSON.parse(JSON.stringify(response));
        const newData: any = {
          userID: obj[0].userID,
          calories: obj[0].calories,
          timeExercising: obj[0].timeExercising,
          distance: obj[0].distance,
          age: this.age,
          weight: this.weight,
          height: this.height
        }
        this.apiService.removeHealthData(<JSON>newData).subscribe((response) => {
          this.apiService.healthDataInsert(<JSON>newData).subscribe((response) => {
            this.userService.changeUser(this.user);
          })
        });
      });
    }
}
