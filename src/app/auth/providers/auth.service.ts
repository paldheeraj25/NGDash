/**
 * Author: Maloth Naresh
 * @license
 * Copyright Bollt. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {

  currentUser: any = {};
  storage: string;
  isLoggedIn = false;

  constructor(private http: HttpClient) {
    this.storage = window.localStorage.getItem('bolttAccessToken')
      ? 'localStorage'
      : 'sessionStorage';
    if (window.localStorage.bolttAccessToken || window.sessionStorage.bolttAccessToken) {
      this.isLoggedIn = true;
    }
  }
  login(user: any): Observable<any> {
    let userData: any = new Object();
    userData.username = user.email;
    userData.password = user.password;
    userData.client_id = 'ac-NaYbDW8KERxa?3A!VyucF4LxJ!^J7';
    userData.client_secret = 'hw2D+Y8UWawgSzYuFFccKY+&Z2n&WQSR';
    userData.grant_type = 'password';
    userData.accessType = 'investorDashboard';

    const url = environment.apiUrl + 'oauth/login';
    return this.http.post(url,
      userData
    );
  }

  // sign in with facebook
  facbookSignIn(user: any): Observable<any> {
    const userdata: any = new Object();
    userdata.facebook_token = user.authToken;
    userdata.facebook_uid = user.id;
    userdata.email = user.email;
    userdata.client_id = 'ac-NaYbDW8KERxa?3A!VyucF4LxJ!^J7';
    userdata.client_secret = 'hw2D+Y8UWawgSzYuFFccKY+&Z2n&WQSR';
    const facebookAuthUrl = environment.apiUrl + 'investorDashboardFacebookLogin';
    return this.http.post(facebookAuthUrl, userdata);
  }

  register(user: any): Observable<any> {
    const url = environment.apiUrl + 'investorRegistration';
    return this.http.post(url, user);
  }

  setStorage(user: any, rememberMe: boolean) {
    this.isLoggedIn = true;
    this.currentUser = user;
    if (rememberMe && rememberMe !== undefined) {
      this.storage = 'localStorage';
    }
    window[this.storage].setItem('bolttAccessToken', user.access_token);
    window[this.storage].bolttUser = JSON.stringify(this.currentUser);
  }

  getUser() {
    return JSON.parse(window[this.storage].bolttUser);
  }

  getToken() {
    return window[this.storage].bolttAccessToken;
  }

  forgotPassword(email: string): Observable<any> {
    const user = { email_address: '', investor_dashboard: 1 };
    user.email_address = email;
    const url = environment.apiUrl + 'forgotPassword';
    return this.http.post(url, user);
  }
}
