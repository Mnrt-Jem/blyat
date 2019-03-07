import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoToPlaylistService {
  youtubeUrl = 'https://www.googleapis.com/youtube/v3/playlistItems';


  constructor(private httpClient: HttpClient) {
  }

  addToPlaylist(videoId: string, idPlaylist: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.post(this.youtubeUrl, {
        snippet: {
          playlistId: idPlaylist,
          resourceId: {
            kind: 'youtube#video',
            videoId: videoId,
          }
        }
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
            console.log(videoId);
            console.log(idPlaylist);
          });
    });
  }
}
