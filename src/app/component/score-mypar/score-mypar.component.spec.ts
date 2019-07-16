import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreMyparComponent } from './score-mypar.component';

describe('ScoreMyparComponent', () => {
  let component: ScoreMyparComponent;
  let fixture: ComponentFixture<ScoreMyparComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreMyparComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreMyparComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
