import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  DashCam = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=text&regionCode=ru&type=video&key=AIzaSyCsg8LgJPvx5Fc7BONQdaKxVttI5KZf4jM';
  searchedVideosDash = '';
  searchedVideosDrunk = '';
  searchedVideosCrash = '';
  searchedVideosFail = '';
  search = '';
  constructor(private https: HttpClient) { }

  ngOnInit() {
  }

  public getVideo(searchInput: string) {
    searchInput = searchInput.replace('', '%7C');
    this.search = searchInput;
    console.log(this.search);
    this.https.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=dashcam+' +
        searchInput + '&regionCode=ru&type=video&key=AIzaSyCsg8LgJPvx5Fc7BONQdaKxVttI5KZf4jM')
        .subscribe((response: Array<Object>) => {
          this.searchedVideosDash = response['items'];
          console.log(this.searchedVideosDash);
        });
    this.https.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=Drunk+' +
        searchInput + '&regionCode=ru&type=video&key=AIzaSyCsg8LgJPvx5Fc7BONQdaKxVttI5KZf4jM')
        .subscribe((response: Array<Object>) => {
          this.searchedVideosDrunk = response['items'];
          console.log(this.searchedVideosDrunk);
        });
    this.https.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=Crash+' +
        searchInput + '&regionCode=ru&type=video&key=AIzaSyCsg8LgJPvx5Fc7BONQdaKxVttI5KZf4jM')
        .subscribe((response: Array<Object>) => {
          this.searchedVideosCrash = response['items'];
          console.log(this.searchedVideosCrash);
        });
    this.https.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=Fail+' +
        searchInput + '&regionCode=ru&type=video&key=AIzaSyCsg8LgJPvx5Fc7BONQdaKxVttI5KZf4jM')
        .subscribe((response: Array<Object>) => {
          this.searchedVideosFail = response['items'];
          console.log(this.searchedVideosFail);
        });
  }
  highlightItem(event: any) {
    const yt = document.getElementById('yt');
    yt.className += ' yt-active';
    const success = document.getElementById('success');
    success.className += ' active';
  }

  /*public addToPlaylist(id: string) {
    const details = {
      videoId: id,
      kind: 'youtube#video'
    }
    const request = gapi.client.youtube.playlistItems.insert({
      part: 'snippet',
      resource: {
        snippet: {
          playlistId: 'playlistId',
          resourceId: details
        }
      }
    });
    request.execute(function(response) {
      console.log('success');
    });
  }*/

}
