import { TestBed } from '@angular/core/testing';

import { LocalstorageGapiService } from './localstorage-gapi.service';

describe('LocalstorageGapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalstorageGapiService = TestBed.get(LocalstorageGapiService);
    expect(service).toBeTruthy();
  });
});
