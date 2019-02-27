import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-playlist-dashcam',
  templateUrl: './playlist-dashcam.component.html',
  styleUrls: ['./playlist-dashcam.component.css']
})
export class PlaylistDashcamComponent implements OnInit {
  DashPlaylist = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLBUVxR39HccS981ldrS5GmYBQJp_JZX0y&key=AIzaSyCsg8LgJPvx5Fc7BONQdaKxVttI5KZf4jM';
  Dash: Object;
  isLoading = false;


  constructor(private Http: HttpClient) { }

  ngOnInit() {
    this.Http.get(this.DashPlaylist)
        .subscribe(data => {
              this.Dash = data;
              this.isLoading = true;
              console.log(this.Dash);
            },
            error => {
              console.log(error);
            }
        );
  }

}
