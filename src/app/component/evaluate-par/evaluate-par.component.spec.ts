import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluateParComponent } from './evaluate-par.component';

describe('EvaluateParComponent', () => {
  let component: EvaluateParComponent;
  let fixture: ComponentFixture<EvaluateParComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluateParComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluateParComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
