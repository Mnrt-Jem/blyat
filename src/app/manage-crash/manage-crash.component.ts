import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DeleteToPlaylistService} from '../service/delete-to-playlist.service';
import {NgForm} from '@angular/forms';
import {RenamePlaylistService} from '../service/rename-playlist.service';

@Component({
  selector: 'app-manage-crash',
  templateUrl: './manage-crash.component.html',
  styleUrls: ['./manage-crash.component.css']
})
export class ManageCrashComponent implements OnInit {

  CrashPlaylist = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLBUVxR39HccRTNPCyQgWTW_GoOEu7_9_h' +
      '&key=AIzaSyDiUBdYn5gMQeJV97eAZ8vexbBIJ_5__oM';
  Crash: Object;
  playlistId = 'PLBUVxR39HccRTNPCyQgWTW_GoOEu7_9_h';
  isLoading = false;


  constructor(private Http: HttpClient, private youtubeDelete: DeleteToPlaylistService, private youtubeRename: RenamePlaylistService) { }

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
