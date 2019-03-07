import { TestBed } from '@angular/core/testing';

import { RenamePlaylistService } from './rename-playlist.service';

describe('RenamePlaylistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RenamePlaylistService = TestBed.get(RenamePlaylistService);
    expect(service).toBeTruthy();
  });
});
