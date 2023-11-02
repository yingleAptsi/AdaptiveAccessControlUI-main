import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RulesetCreateOrUpdateComponent } from './ruleset-create-or-update.component';

describe('RulesetCreateOrUpdateComponent', () => {
  let component: RulesetCreateOrUpdateComponent;
  let fixture: ComponentFixture<RulesetCreateOrUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulesetCreateOrUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesetCreateOrUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
