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

  getUserHealthData(data : JSON): Observable<Object> {
    return this.http.post(url + 'userhealthdata', data);
  }

  getUserGoalData(user : JSON): Observable<Object> {
    return this.http.post(url + 'getUserGoalData', user);
  }

  removeUserGoalData(data : JSON): Observable<Object> {
    return this.http.post(url + 'removeUserGoalData', data);
  }

  insertUserGoalData(data : JSON): Observable<Object> {
    return this.http.post(url + 'insertUserGoalData', data);
  }

  getUserCurrentCount(user : JSON): Observable<Object> {
    return this.http.post(url + 'currentCount', user);
  }

  login(user : JSON): Observable<Object> {
    return this.http.post(url + 'login', user);
  }

  register(user : JSON): Observable<Object> {
    return this.http.post(url + 'register', user);
  }

  healthDataInsert(data : JSON): Observable<Object> {
    return this.http.post(url + 'healthdatainsert', data);
  }

  addUserData(data : JSON): Observable<Object> {
    return this.http.post(url + 'statusupdate', data);
  }

  removeUserData(data : JSON): Observable<Object> {
    return this.http.post(url + 'removestatus', data);
  }

  removeHealthData(data : JSON): Observable<Object> {
    return this.http.post(url + 'removehealthdata', data);
  }
}
