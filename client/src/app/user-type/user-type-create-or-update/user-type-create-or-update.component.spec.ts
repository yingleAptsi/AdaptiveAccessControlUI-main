import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTypeCreateOrUpdateComponent } from './user-type-create-or-update.component';

describe('UserTypeCreateOrUpdateComponent', () => {
  let component: UserTypeCreateOrUpdateComponent;
  let fixture: ComponentFixture<UserTypeCreateOrUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserTypeCreateOrUpdateComponent]
    });
    fixture = TestBed.createComponent(UserTypeCreateOrUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
