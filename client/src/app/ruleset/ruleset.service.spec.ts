import { TestBed } from '@angular/core/testing';

import { RulesetService } from './ruleset.service';

describe('RulesetSearchService', () => {
  let service: RulesetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RulesetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
