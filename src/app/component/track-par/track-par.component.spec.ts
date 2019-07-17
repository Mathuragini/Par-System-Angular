import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackParComponent } from './track-par.component';

describe('TrackParComponent', () => {
  let component: TrackParComponent;
  let fixture: ComponentFixture<TrackParComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackParComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackParComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
