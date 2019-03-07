import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {CommentaireService} from '../service/commentaire.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-blyat-video',
  templateUrl: './blyat-video.component.html',
  styleUrls: ['./blyat-video.component.css']
})
export class BlyatVideoComponent implements OnInit {

  constructor(private Activatedroute: ActivatedRoute, private Http: HttpClient, private commentaire: CommentaireService) {
  }

  public id = '';
  videoid: string;
  public video = '';
  vid: Object;

  ngOnInit() {
    this.id = this.Activatedroute.snapshot.params['id'];
    this.videoid = this.id;
    this.video = 'https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=20&videoId='
        + this.videoid + '&key=AIzaSyDiUBdYn5gMQeJV97eAZ8vexbBIJ_5__oM';
    this.Http.get(this.video)
        .subscribe(data => {
              this.vid = data;
              console.log(this.vid);
            },
            error => {
              console.log(error);
            }
        );
  }

  addCommentaireToVideo(commentText: string, commentForm: NgForm) {
    this.commentaire.addCommentaire(this.videoid, commentText)
        .then(res => {
          commentForm.reset();
          console.log('success');
        })
        .catch(err => console.log(err));
  }


}
