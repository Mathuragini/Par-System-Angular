import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleparSingleComponent } from './schedulepar-single.component';

describe('ScheduleparSingleComponent', () => {
  let component: ScheduleparSingleComponent;
  let fixture: ComponentFixture<ScheduleparSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleparSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleparSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
