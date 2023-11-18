import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageInfoCustomerComponent } from './manage-info-customer.component';

describe('ManageInfoCustomerComponent', () => {
  let component: ManageInfoCustomerComponent;
  let fixture: ComponentFixture<ManageInfoCustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageInfoCustomerComponent]
    });
    fixture = TestBed.createComponent(ManageInfoCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
