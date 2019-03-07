import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RenamePlaylistService {
  RenameUrl = 'https://www.googleapis.com/youtube/v3/playlists';


  constructor(private httpClient: HttpClient) { }

  RenamePlaylist(playlistId: string, renameText: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.put(this.RenameUrl, {
        id: playlistId,
        snippet: {
          title: renameText,
        },
      }, {
        params: {
          'part': 'snippet',
          key: 'AIzaSyDiUBdYn5gMQeJV97eAZ8vexbBIJ_5__oM',
        },
      }).subscribe(res => {
            resolve(res);
          },
          err => {
            reject(err);
            console.log(playlistId);
            console.log(renameText);
          });
    });
  }
}
