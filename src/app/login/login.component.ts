import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    // Handle login logic here
    console.log(`Email: ${this.email}, Password: ${this.password}`);
  }
}
