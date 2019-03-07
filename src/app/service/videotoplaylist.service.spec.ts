import { TestBed } from '@angular/core/testing';

import { VideotoplaylistService } from './videotoplaylist.service';

describe('VideotoplaylistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VideotoplaylistService = TestBed.get(VideotoplaylistService);
    expect(service).toBeTruthy();
  });
});
