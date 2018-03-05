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
  login(user: any) {
    const userData: any = new Object();
    userData.username = user.email;
    userData.password = user.password;
    userData.client_id = 'ac-NaYbDW8KERxa?3A!VyucF4LxJ!^J7';
    userData.client_secret = 'hw2D+Y8UWawgSzYuFFccKY+&Z2n&WQSR';
    userData.grant_type = 'password';
    userData.accessType = 'investorDashboard';

    return this.http.post('http://bolttdev.ap-south-1.elasticbeanstalk.com/oauth/login',
      userData,
    );
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

}
