import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {subscribeOn} from 'rxjs/operators';
import {VideoToPlaylistService} from '../service/videotoplaylist.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  searchedVideosDash = '';
  searchedVideosDrunk = '';
  searchedVideosCrash = '';
  searchedVideosFail = '';
  search = '';
  idDash = 'PLBUVxR39HccS981ldrS5GmYBQJp_JZX0y';
  idCrash = 'PLBUVxR39HccRTNPCyQgWTW_GoOEu7_9_h';
  idDrunk = 'PLBUVxR39HccQ9Rghf9us7N3m8LpdShaod';
  idFail = 'PLBUVxR39HccQlAEfI4F2zRL0osYRiHzc4';
  youtubeUrl = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyDiUBdYn5gMQeJV97eAZ8vexbBIJ_5__oM';
  constructor(private https: HttpClient, private youtubevideo: VideoToPlaylistService) { }

  ngOnInit() {
  }

  public getVideo(searchInput: string) {
    searchInput = searchInput.replace('', '%7C');
    this.search = searchInput;
    console.log(this.search);
    this.https.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=dashcam+' +
        searchInput + '&regionCode=ru&type=video&key=AIzaSyDiUBdYn5gMQeJV97eAZ8vexbBIJ_5__oM')
        .subscribe((response: Array<Object>) => {
          this.searchedVideosDash = response['items'];
          console.log(this.searchedVideosDash);
        });
    this.https.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=Drunk+' +
        searchInput + '&regionCode=ru&type=video&key=AIzaSyDiUBdYn5gMQeJV97eAZ8vexbBIJ_5__oM')
        .subscribe((response: Array<Object>) => {
          this.searchedVideosDrunk = response['items'];
          console.log(this.searchedVideosDrunk);
        });
    this.https.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=Crash+' +
        searchInput + '&regionCode=ru&type=video&key=AIzaSyDiUBdYn5gMQeJV97eAZ8vexbBIJ_5__oM')
        .subscribe((response: Array<Object>) => {
          this.searchedVideosCrash = response['items'];
          console.log(this.searchedVideosCrash);
        });
    this.https.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=Fail+' +
        searchInput + '&regionCode=ru&type=video&key=AIzaSyDiUBdYn5gMQeJV97eAZ8vexbBIJ_5__oM')
        .subscribe((response: Array<Object>) => {
          this.searchedVideosFail = response['items'];
          console.log(this.searchedVideosFail);
        });
  }
  highlightItem(videoId: string, idDash: string) {


      this.youtubevideo.addToPlaylist(videoId, idDash);
    const yt = document.getElementById('yt');
    yt.className += ' yt-active';
    const success = document.getElementById('success');
    success.className += ' active';
  }
    highlightItem2(videoId: string, idDrunk: string) {


        this.youtubevideo.addToPlaylist(videoId, idDrunk);
        const yt = document.getElementById('yt');
        yt.className += ' yt-active';
        const success = document.getElementById('success');
        success.className += ' active';
    }
    highlightItem3(videoId: string, idCrash: string) {


        this.youtubevideo.addToPlaylist(videoId, idCrash);
        const yt = document.getElementById('yt');
        yt.className += ' yt-active';
        const success = document.getElementById('success');
        success.className += ' active';
    }
    highlightItem4(videoId: string, idFail: string) {


        this.youtubevideo.addToPlaylist(videoId, idFail);
        const yt = document.getElementById('yt');
        yt.className += ' yt-active';
        const success = document.getElementById('success');
        success.className += ' active';
    }


}
