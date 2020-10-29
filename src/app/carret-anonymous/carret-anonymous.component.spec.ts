import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarretAnonymousComponent } from './carret-anonymous.component';

describe('CarretAnonymousComponent', () => {
  let component: CarretAnonymousComponent;
  let fixture: ComponentFixture<CarretAnonymousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarretAnonymousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarretAnonymousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
