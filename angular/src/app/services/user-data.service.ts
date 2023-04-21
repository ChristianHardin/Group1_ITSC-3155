import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private messageSource = new BehaviorSubject<string>('{}');
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeUser(user: User) {
    this.messageSource.next(JSON.stringify(user));
  }
}
