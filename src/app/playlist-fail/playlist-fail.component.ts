import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-playlist-fail',
  templateUrl: './playlist-fail.component.html',
  styleUrls: ['./playlist-fail.component.css']
})
export class PlaylistFailComponent implements OnInit {
  FailPlaylist = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLBUVxR39HccQlAEfI4F2zRL0osYRiHzc4&key=AIzaSyDiUBdYn5gMQeJV97eAZ8vexbBIJ_5__oM';
  Fail: Object;
  isLoading = false;


  constructor(private Http: HttpClient) { }

  ngOnInit() {
    this.Http.get(this.FailPlaylist)
        .subscribe(data => {
              this.Fail = data;
              this.isLoading = true;
              console.log(this.Fail);
            },
            error => {
              console.log(error);
            }
        );
  }

}
