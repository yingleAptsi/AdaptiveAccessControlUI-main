import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesCreateOrUpdateComponent } from './rules-create-or-update.component';

describe('RulesCreateComponent', () => {
  let component: RulesCreateOrUpdateComponent;
  let fixture: ComponentFixture<RulesCreateOrUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RulesCreateOrUpdateComponent]
    });
    fixture = TestBed.createComponent(RulesCreateOrUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
