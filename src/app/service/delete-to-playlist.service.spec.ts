import { TestBed } from '@angular/core/testing';

import { DeleteToPlaylistService } from './delete-to-playlist.service';

describe('DeleteToPlaylistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeleteToPlaylistService = TestBed.get(DeleteToPlaylistService);
    expect(service).toBeTruthy();
  });
});
