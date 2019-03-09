import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteToPlaylistService {


  constructor(private httpClient: HttpClient) {
  }
  deleteToPlaylist(videoId: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.delete('https://www.googleapis.com/youtube/v3/playlistItems?id=' + videoId +
          '&key=AIzaSyDiUBdYn5gMQeJV97eAZ8vexbBIJ_5__oM').subscribe(res => {
            resolve(res);

          },
          err => {
            reject(err);
            console.log(this.httpClient);
          });
    });
  }
}
