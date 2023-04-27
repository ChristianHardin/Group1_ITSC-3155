import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { DataServiceService } from '../services/data-service.service';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  userName: string = "Please log in."
  constructor(private dialog: MatDialog,
    private apiService : DataServiceService,
    private userService : UserDataService) {}


  ngOnInit(): void {
    this.userService.currentMessage.subscribe(user => {
      this.userName = JSON.parse(user)[0].name;
    });
  }

  showNavbar = true;
  toggleNavbar() {
    this.showNavbar = !this.showNavbar;
  }

  openLoginDialog(): void {
    this.dialog.open(LoginComponent);
  }
}
