import { TestBed } from '@angular/core/testing';

import { RuleService } from './rules.service';

describe('RulesetSearchService', () => {
  let service: RuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
