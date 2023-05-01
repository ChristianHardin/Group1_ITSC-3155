import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
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

  getUserHealthData(user : JSON): Observable<HealthData[]> {
    return this.http.get<HealthData[]>(url + 'userhealthdata', {
      params: new HttpParams().set("user", JSON.stringify(user))
    });
    
  }

  login(user : JSON): Observable<Object> {
    return this.http.post(url + 'login', user);
  }

  register(user : JSON): Observable<Object> {
    return this.http.post(url + 'register', user);
  }

  healthDataInsert(user : JSON): Observable<Object> {
    return this.http.post(url + 'healthdatainsert', user);
  }

  addUserData(data : JSON): Observable<Object> {
    return this.http.post(url + 'statusupdate', data);
  }

  updateBiometrics(data : JSON): Observable<Object> {
    return this.http.post(url + 'biometricupdate', data);
  }

}
