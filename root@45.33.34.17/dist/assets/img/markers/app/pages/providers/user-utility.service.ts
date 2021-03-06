import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './../../auth/providers/auth.service';
import { environment } from './../../../environments/environment';
@Injectable()
export class UserUtilityService {

  private user: any = {};
  public addressUrl = environment.apiUrl +  'getPaymentAddress';
  constructor(private http: HttpClient, private authService: AuthService) { 
    let currentUser = this.authService.getUser();
    this.user.name = currentUser.user_details.first_name + ' ' + currentUser.user_details.last_name;
    this.user.picture = currentUser.user_details.profile_image;
  }

  getUserAddresses(): Observable<any> {
    return this.apiGateWay(this.addressUrl, 'get');
  }

  apiGateWay(url?, method?, params?): Observable<any> {
    let storage = window.localStorage.getItem('bolttAccessToken')
    ? 'localStorage'
    : 'sessionStorage';
    let headers = new HttpHeaders;
    headers = headers.append('Authorization', window[storage].bolttAccessToken);
    if(method === 'get') {
      return this.http[method](url, { headers: headers });
    } else if(method === 'post') {
      return this.http[method](url, params, { headers: headers });
    }
  }

}
