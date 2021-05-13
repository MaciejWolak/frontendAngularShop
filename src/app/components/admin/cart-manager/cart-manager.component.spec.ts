import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartManagerComponent } from './cart-manager.component';

describe('CartManagerComponent', () => {
  let component: CartManagerComponent;
  let fixture: ComponentFixture<CartManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
