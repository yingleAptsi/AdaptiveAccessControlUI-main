import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTypeSearchComponent } from './user-type-search.component';

describe('UserTypeSearchComponent', () => {
  let component: UserTypeSearchComponent;
  let fixture: ComponentFixture<UserTypeSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserTypeSearchComponent]
    });
    fixture = TestBed.createComponent(UserTypeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
