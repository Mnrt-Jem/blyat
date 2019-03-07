import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../service/auth.service';
import {GoogleApiOauthStorageService} from '../service/localstorage-gapi.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  search = '';
  userAuthData: object;
  constructor(
      private http: HttpClient,
      private authService: AuthService,
      private googleAuthStorage: GoogleApiOauthStorageService) { }

  ngOnInit() {
    this.userAuthData = this.googleAuthStorage.getAuthenticationData();
    this.authService.loadCallbackGoogleApi();
  }
  oauthSignIn() {
    this.authService.signIn(
        (res) => this.handleSignInSuccess(res),
        (err) => this.handleSignInAborted(err));
  }
  handleSignInSuccess(response) {
    const storageData = {
      'access_token': response.Zi.access_token,
      'expires_at': response.Zi.expires_at,
      'id_token': response.Zi.id_token,
      'full_name': response.w3.ig,
      'logoUrl': response.w3.Paa,
    };
    this.userAuthData = storageData;
    this.googleAuthStorage.setAuthenticationData(storageData);
  }
  handleSignInAborted(err) {
    console.log(err); // TODO:: Display error message to user
  }
  oauthSignOut() {
    this.authService.signOut();
    this.googleAuthStorage.resetAuthenticationData();
  }
}
