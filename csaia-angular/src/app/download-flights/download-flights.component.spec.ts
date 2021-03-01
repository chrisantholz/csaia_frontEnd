import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadFlightsComponent } from './download-flights.component';

describe('DownloadFlightsComponent', () => {
  let component: DownloadFlightsComponent;
  let fixture: ComponentFixture<DownloadFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadFlightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
