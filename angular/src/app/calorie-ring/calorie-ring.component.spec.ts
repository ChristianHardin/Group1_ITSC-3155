import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalorieRingComponent } from './calorie-ring.component';

describe('CalorieRingComponent', () => {
  let component: CalorieRingComponent;
  let fixture: ComponentFixture<CalorieRingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalorieRingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalorieRingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
