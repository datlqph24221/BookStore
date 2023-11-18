import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInfoComponent } from './form-info.component';

describe('FormInfoComponent', () => {
  let component: FormInfoComponent;
  let fixture: ComponentFixture<FormInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormInfoComponent]
    });
    fixture = TestBed.createComponent(FormInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
