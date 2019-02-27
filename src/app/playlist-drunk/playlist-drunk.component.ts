import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-playlist-drunk',
  templateUrl: './playlist-drunk.component.html',
  styleUrls: ['./playlist-drunk.component.css']
})
export class PlaylistDrunkComponent implements OnInit {
  DrunkPlaylist = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLBUVxR39HccQ9Rghf9us7N3m8LpdShaod&key=AIzaSyCsg8LgJPvx5Fc7BONQdaKxVttI5KZf4jM';
  Drunk: Object;
  isLoading = false;


  constructor(private Http: HttpClient) { }

  ngOnInit() {
    this.Http.get(this.DrunkPlaylist)
        .subscribe(data => {
              this.Drunk = data;
              this.isLoading = true;
              console.log(this.Drunk);
            },
            error => {
              console.log(error);
            }
        );
  }

}
