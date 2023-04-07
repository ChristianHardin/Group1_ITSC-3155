import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifetimeStatsComponent } from './lifetime-stats.component';

describe('LifetimeStatsComponent', () => {
  let component: LifetimeStatsComponent;
  let fixture: ComponentFixture<LifetimeStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifetimeStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifetimeStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
