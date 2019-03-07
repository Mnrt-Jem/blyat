import { Injectable } from '@angular/core';
import {stringify} from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class GoogleApiOauthStorageService {

  constructor() { }

  setAuthenticationData(data: object) {
    localStorage.setItem('google-auth-storage', JSON.stringify(data));
  }
  resetAuthenticationData() {
    localStorage.removeItem('google-auth-storage');
  }
  getAuthenticationData() {
    return JSON.parse(localStorage.getItem('google-auth-storage'));
  }
  isAuthenticationDataKeyExist(dataKey: string) {
    const oAuthData = this.getAuthenticationData();
    return oAuthData ? !!oAuthData[dataKey] : false;
  }
  getAuthenticationDataWithKey(dataKey: string) {
    const oAuthData = this.getAuthenticationData();
    return this.isAuthenticationDataKeyExist(dataKey) ? oAuthData[dataKey] : null;
  }
}
