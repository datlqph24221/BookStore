import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNewProductComponent } from './list-new-product.component';

describe('ListNewProductComponent', () => {
  let component: ListNewProductComponent;
  let fixture: ComponentFixture<ListNewProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListNewProductComponent]
    });
    fixture = TestBed.createComponent(ListNewProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
