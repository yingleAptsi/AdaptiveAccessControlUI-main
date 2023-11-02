import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskScoreAuthoringComponent } from './risk-score-authoring.component';

describe('RiskScoreAuthoringComponent', () => {
  let component: RiskScoreAuthoringComponent;
  let fixture: ComponentFixture<RiskScoreAuthoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskScoreAuthoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskScoreAuthoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
