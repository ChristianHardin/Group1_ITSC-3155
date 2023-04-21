import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeightAgeWeightComponent } from './height-age-weight.component';

describe('HeightAgeWeightComponent', () => {
  let component: HeightAgeWeightComponent;
  let fixture: ComponentFixture<HeightAgeWeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeightAgeWeightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeightAgeWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
