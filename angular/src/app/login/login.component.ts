import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/models/user.model';
import { DataServiceService } from '../services/data-service.service';
import { UserDataService } from '../services/user-data.service';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  status: string = '';

  constructor(
    private apiService:  DataServiceService,
    private userService: UserDataService,
    private dialogRef: MatDialogRef<LoginComponent>,
    private dialog: MatDialog
    ){}

  ngOnInit(): void {}

  onSubmit() {
    const user:any =
      {
        username: this.username,
        password: this.password
      };
    this.apiService.login(<JSON>user).subscribe((response) => {
      if (JSON.stringify(response) == '{"404":"404"}') {
        this.status = 'User not found.'
      } else {
        this.changeUser(response);
        this.dialogRef.close();
      }
    });
  }

  changeUser(user: User) {
    this.userService.changeUser(user);
  }

  openRegisterWindow() {
    this.dialogRef.close();
    this.dialog.open(RegisterComponent);
  }
}
