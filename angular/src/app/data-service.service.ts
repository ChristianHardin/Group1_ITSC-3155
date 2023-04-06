import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'models/user.model';

const url = "https://localhost:3000/"

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }


  getUser(): Observable<User[]> {
    return this.http.get<User[]>(`${url}/'users'`);
  }
}
