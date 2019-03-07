import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {
  CommentaireUrl = 'https://www.googleapis.com/youtube/v3/commentThreads';


  constructor(private httpClient: HttpClient) { }

  addCommentaire(videoId: string, commentText: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.post(this.CommentaireUrl, {
        snippet: {
          topLevelComment: {
            snippet: {
              videoId: videoId,
              textOriginal: commentText,
            },
          },
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
            console.log(videoId);
            console.log(commentText);
            console.log(this.httpClient);
            alert(commentText);
          });
    });
  }
}
