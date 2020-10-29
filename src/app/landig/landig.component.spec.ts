import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandigComponent } from './landig.component';

describe('LandigComponent', () => {
  let component: LandigComponent;
  let fixture: ComponentFixture<LandigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
