import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliceItemProductComponent } from './slice-item-product.component';

describe('SliceItemProductComponent', () => {
  let component: SliceItemProductComponent;
  let fixture: ComponentFixture<SliceItemProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliceItemProductComponent]
    });
    fixture = TestBed.createComponent(SliceItemProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
