import {async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AssetCreateOrUpdateComponent } from './asset-create-or-update.component';

describe('AssetCreateOrUpdateComponent', () => {
  let component: AssetCreateOrUpdateComponent;
  let fixture: ComponentFixture<AssetCreateOrUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AssetCreateOrUpdateComponent]
    }) 
    .compileComponents();
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(AssetCreateOrUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

