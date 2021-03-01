import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFlightsComponent } from './upload-flights.component';

describe('UploadFlightsComponent', () => {
  let component: UploadFlightsComponent;
  let fixture: ComponentFixture<UploadFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadFlightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
