import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Goal } from 'src/models/goal.model';

@Injectable({
  providedIn: 'root'
})
export class GoalDataService {
  private messageSource = new BehaviorSubject<string>('{}');
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeUser(goal: Goal) {
    this.messageSource.next(JSON.stringify(goal));
  }
}
