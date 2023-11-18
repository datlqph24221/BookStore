import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHotProductComponent } from './list-hot-product.component';

describe('ListHotProductComponent', () => {
  let component: ListHotProductComponent;
  let fixture: ComponentFixture<ListHotProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListHotProductComponent]
    });
    fixture = TestBed.createComponent(ListHotProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
