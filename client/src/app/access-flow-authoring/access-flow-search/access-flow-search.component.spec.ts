import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessFlowSearchComponent } from './access-flow-search.component';

describe('AccessFlowSearchComponent', () => {
  let component: AccessFlowSearchComponent;
  let fixture: ComponentFixture<AccessFlowSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccessFlowSearchComponent]
    });
    fixture = TestBed.createComponent(AccessFlowSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
