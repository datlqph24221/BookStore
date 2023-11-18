import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndBannerComponent } from './end-banner.component';

describe('EndBannerComponent', () => {
  let component: EndBannerComponent;
  let fixture: ComponentFixture<EndBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EndBannerComponent]
    });
    fixture = TestBed.createComponent(EndBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
