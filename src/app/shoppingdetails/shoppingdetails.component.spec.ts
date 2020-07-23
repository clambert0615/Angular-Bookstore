import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingdetailsComponent } from './shoppingdetails.component';

describe('ShoppingdetailsComponent', () => {
  let component: ShoppingdetailsComponent;
  let fixture: ComponentFixture<ShoppingdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
