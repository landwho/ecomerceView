import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimiteCreditoComponent } from './limite-credito.component';

describe('LimiteCreditoComponent', () => {
  let component: LimiteCreditoComponent;
  let fixture: ComponentFixture<LimiteCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimiteCreditoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LimiteCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
