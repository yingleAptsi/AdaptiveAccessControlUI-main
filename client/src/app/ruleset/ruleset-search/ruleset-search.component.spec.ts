import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RulesetSearchComponent } from './ruleset-search.component';

describe('RulesetSearchComponent', () => {
  let component: RulesetSearchComponent;
  let fixture: ComponentFixture<RulesetSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulesetSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesetSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
