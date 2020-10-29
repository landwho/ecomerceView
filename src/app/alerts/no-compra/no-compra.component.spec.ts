import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoCompraComponent } from './no-compra.component';

describe('NoCompraComponent', () => {
  let component: NoCompraComponent;
  let fixture: ComponentFixture<NoCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoCompraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
