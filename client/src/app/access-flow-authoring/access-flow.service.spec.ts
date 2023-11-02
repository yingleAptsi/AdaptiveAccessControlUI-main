import { TestBed } from '@angular/core/testing';

import { AccessFlowService } from './access-flow.service';

describe('AccessflowSearchService', () => {
  let service: AccessFlowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessFlowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});