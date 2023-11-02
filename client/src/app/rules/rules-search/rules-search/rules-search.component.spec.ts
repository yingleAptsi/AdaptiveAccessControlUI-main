import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesSearchComponent } from './rules-search.component';

describe('RulesSearchComponent', () => {
  let component: RulesSearchComponent;
  let fixture: ComponentFixture<RulesSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RulesSearchComponent]
    });
    fixture = TestBed.createComponent(RulesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
