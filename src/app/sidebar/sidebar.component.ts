import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service';
import {GoogleApiOauthStorageService} from '../service/localstorage-gapi.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  userAuthData: object;
  constructor(private authService: AuthService,
              private googleAuthStorage: GoogleApiOauthStorageService) { }

  ngOnInit() {
    this.userAuthData = this.googleAuthStorage.getAuthenticationData();
    this.authService.loadCallbackGoogleApi();
  }

}
