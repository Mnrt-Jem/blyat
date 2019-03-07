import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DeleteToPlaylistService} from '../service/delete-to-playlist.service';
import {RenamePlaylistService} from '../service/rename-playlist.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-manage-drunk',
  templateUrl: './manage-drunk.component.html',
  styleUrls: ['./manage-drunk.component.css']
})
export class ManageDrunkComponent implements OnInit {

  DrunkPlaylist = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLBUVxR39HccQ9Rghf9us7N3m8LpdShaod' +
      '&key=AIzaSyDiUBdYn5gMQeJV97eAZ8vexbBIJ_5__oM';
  Drunk: Object;
    playlistId = 'PLBUVxR39HccQ9Rghf9us7N3m8LpdShaod';
  isLoading = false;


  constructor(private Http: HttpClient, private youtubeDelete: DeleteToPlaylistService, private youtubeRename: RenamePlaylistService) { }

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
  deleteVideo(videoId: string) {
    this.youtubeDelete.deleteToPlaylist(videoId);

  }
    editPlaylistName(renameText: string) {
        this.youtubeRename.RenamePlaylist(this.playlistId, renameText)
            .then(res => {
                console.log('success');
            })
            .catch(err => console.log(this.playlistId));

    }

}
