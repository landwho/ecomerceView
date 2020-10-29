import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarretComponent } from './carret.component';

describe('CarretComponent', () => {
  let component: CarretComponent;
  let fixture: ComponentFixture<CarretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarretComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
