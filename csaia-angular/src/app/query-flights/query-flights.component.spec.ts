import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryFlightsComponent } from './query-flights.component';

describe('QueryFlightsComponent', () => {
  let component: QueryFlightsComponent;
  let fixture: ComponentFixture<QueryFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryFlightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
