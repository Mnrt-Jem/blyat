import { Component, Input, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/Http';



@Component({
  selector: 'app-playlist-crash',
  templateUrl: './playlist-crash.component.html',
  styleUrls: ['./playlist-crash.component.css']
})

export class PlaylistCrashComponent implements OnInit {
  CrashPlaylist = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLBUVxR39HccRTNPCyQgWTW_GoOEu7_9_h&key=AIzaSyDiUBdYn5gMQeJV97eAZ8vexbBIJ_5__oM';
  Crash: Object;
  isLoading = false;


  constructor(private Http: HttpClient) { }

  ngOnInit() {
    this.Http.get(this.CrashPlaylist)
        .subscribe(data => {
              this.Crash = data;
              this.isLoading = true;
              console.log(this.Crash);
            },
            error => {
              console.log(error);
            }
        );
  }

}
