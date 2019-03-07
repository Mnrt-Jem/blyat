import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DeleteToPlaylistService} from '../service/delete-to-playlist.service';
import {RenamePlaylistService} from '../service/rename-playlist.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-manage-dashcam',
  templateUrl: './manage-dashcam.component.html',
  styleUrls: ['./manage-dashcam.component.css']
})
export class ManageDashcamComponent implements OnInit {

  DashPlaylist = 'https://www.googleapis.com/youtube/v3/playlistItems?' +
      'part=snippet&playlistId=PLBUVxR39HccS981ldrS5GmYBQJp_JZX0y&key=AIzaSyDiUBdYn5gMQeJV97eAZ8vexbBIJ_5__oM';
  Dash: Object;
  playlistId = 'PLBUVxR39HccS981ldrS5GmYBQJp_JZX0y';
  isLoading = false;


  constructor(private Http: HttpClient, private youtubeDelete: DeleteToPlaylistService, private youtubeRename: RenamePlaylistService) { }

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
