import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessFlowCreateOrUpdateComponent } from './access-flow-create-or-update.component';

describe('AccessFlowCreateOrUpdateComponent', () => {
  let component: AccessFlowCreateOrUpdateComponent;
  let fixture: ComponentFixture<AccessFlowCreateOrUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccessFlowCreateOrUpdateComponent]
    });
    fixture = TestBed.createComponent(AccessFlowCreateOrUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
