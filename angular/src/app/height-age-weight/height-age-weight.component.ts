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

  constructor(
    private apiService : DataServiceService,
    private userService : UserDataService
    ) { }

    ngOnInit(): void {
      this.userService.currentMessage.subscribe(user => {
        this.user = JSON.parse(user);
        this.getDataFromAPI();
      });
    }

    getDataFromAPI(){
      this.apiService.getUserHealthData(<JSON>this.user).subscribe((response) =>{
        for (let i = 0; i < response.length; i++) {
          console.log(typeof response[i].height);
          
          if (typeof response[i].height === "number") {
            this.height = '' + response[i].height;
            this.weight = '' + response[i].weight;
            this.age = '' + response[i].age;
          }
        }}, (error) => {
        console.log('Error: ', error)
      });
    }
}
