import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { DataServiceService } from '../services/data-service.service';
import { UserDataService } from '../services/user-data.service';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: string = '';
  username: string = '';
  email: string = '';
  password: string = '';
  height: number = 0;
  weight: number = 0;
  age: number = 0;
  status: string = '';

  mUser:User = {};

  constructor(
    private apiService:  DataServiceService,
    private userService: UserDataService,
    private dialogRef: MatDialogRef<LoginComponent>,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  openLoginWindow() {
    this.dialogRef.close();
    this.dialog.open(LoginComponent);
  }

  onSubmit() {
    const newUser:any = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password,
      height: this.height,
      weight: this.weight,
      age: this.age
    };

    this.apiService.register(<JSON>newUser).subscribe((response) => {
      if (JSON.stringify(response) == '{"404":"404"}') {
        this.status = 'Registration Failed'
      } else {
        const user:any =
        {
          username: this.username,
          password: this.password
        };

        this.login(user);
        

        this.status = 'Registration successful!';
        
        setTimeout(() => {
          this.username = '';
          this.email = '';
          this.password = '';
          this.height = 0;
          this.weight = 0;
          this.age = 0;
          this.userService.changeUser(this.mUser);
          this.dialogRef.close();
        }, 1500);        
      }
    });
  }

  login(user: User) {
    this.apiService.login(<JSON>user).subscribe((response) => {
      if (JSON.stringify(response) == '{"404":"404"}') {
        this.status = 'User not found.'
      } else {
        this.changeUser(response);
        this.mUser = response;
        let stringr = JSON.stringify(response)
        let userID = JSON.parse(stringr)[0].userID;

        const user:any = {
          userID: userID,
          date: "'2022-03-04'",
          calories: 0,
          timeExercising: 0,
          distance: 0,
          age: this.age,
          weight: this.weight,
          height: this.height
        }
        this.apiService.healthDataInsert(<JSON>user).subscribe((response) => {});
      }
    });
  }

  changeUser(user: User) {
    this.userService.changeUser(user);
  }
}
