import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTopProductComponent } from './list-top-product.component';

describe('ListTopProductComponent', () => {
  let component: ListTopProductComponent;
  let fixture: ComponentFixture<ListTopProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListTopProductComponent]
    });
    fixture = TestBed.createComponent(ListTopProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
