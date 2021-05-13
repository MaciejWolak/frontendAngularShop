import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartsListComponent } from './carts-list.component';

describe('CartsListComponent', () => {
  let component: CartsListComponent;
  let fixture: ComponentFixture<CartsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
