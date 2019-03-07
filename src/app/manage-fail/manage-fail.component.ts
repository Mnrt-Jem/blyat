import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DeleteToPlaylistService} from '../service/delete-to-playlist.service';
import {RenamePlaylistService} from '../service/rename-playlist.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-manage-fail',
  templateUrl: './manage-fail.component.html',
  styleUrls: ['./manage-fail.component.css']
})
export class ManageFailComponent implements OnInit {

  FailPlaylist = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLBUVxR39HccQlAEfI4F2zRL0osYRiHzc4' +
      '&key=AIzaSyDiUBdYn5gMQeJV97eAZ8vexbBIJ_5__oM';
  Fail: Object;
  playlistId = 'PLBUVxR39HccQlAEfI4F2zRL0osYRiHzc4';
  isLoading = false;


  constructor(private Http: HttpClient, private youtubeDelete: DeleteToPlaylistService, private youtubeRename: RenamePlaylistService) { }

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
