import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HealthData } from 'src/models/health-data.model';
import { User } from 'src/models/user.model';

const url = "http://localhost:4000/"

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http : HttpClient) { }

  getUserData(): Observable<User[]> {
    return this.http.get<User[]>(url + 'users')
  }

  getHealthData(): Observable<HealthData[]> {
    return this.http.get<HealthData[]>(url + 'healthdata')
  }
}
