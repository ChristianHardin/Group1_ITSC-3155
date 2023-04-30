import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string = '';
  email: string = '';
  password: string = '';
  height: number = 0;
  weight: number = 0;
  age: number = 0;
  status: string = '';

  registeredUsers: any[] = [];

  constructor(private dialogRef: MatDialogRef<LoginComponent>,
  private dialog: MatDialog) {}

  ngOnInit(): void {}

  openLoginWindow() {
    this.dialogRef.close();
    this.dialog.open(LoginComponent);
  }

  onSubmit() {
    const newUser = {
      username: this.username,
      email: this.email,
      password: this.password,
      height: this.height,
      weight: this.weight,
      age: this.age
    };

    this.registeredUsers.push(newUser);

    this.status = 'Registration successful!';

    this.username = '';
    this.email = '';
    this.password = '';
    this.height = 0;
    this.weight = 0;
    this.age = 0;

    setTimeout(() => {
      this.dialogRef.close();
    }, 1500);
  }
}
