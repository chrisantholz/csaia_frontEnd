import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenOrthoComponent } from './gen-ortho.component';

describe('GenOrthoComponent', () => {
  let component: GenOrthoComponent;
  let fixture: ComponentFixture<GenOrthoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenOrthoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenOrthoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
