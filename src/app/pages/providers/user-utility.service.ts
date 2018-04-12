import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './../../auth/providers/auth.service';
import { environment } from './../../../environments/environment';
@Injectable()
export class UserUtilityService {

  private user: any = {};
  public addressUrl = environment.apiUrl + 'getPaymentAddress';
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
    if (method === 'get') {
      return this.http[method](url, { headers: headers });
    } else if (method === 'post') {
      return this.http[method](url, params, { headers: headers });
    }
  }

  getLoginHistory(): Observable<any> {
    const loginHistory = environment.apiUrl + 'userDasboardLoginHistory';
    return this.apiGateWay(loginHistory, 'get');
  }

  getDate(date) {
    return date.day + "/" + date.month + "/" + date.year;
  }

  getLiveTransactions(): Observable<any> {
    const liveTransaction = environment.apiUrl + 'getLiveTransactions';
    return this.apiGateWay(liveTransaction, 'get');
  }

  getEtherTransaction(): Observable<any> {
    const etherTransaction = environment.apiUrl + 'getEtherTransactions';
    return this.apiGateWay(etherTransaction, 'get');
  };

  sendEmail(mailObject: any): Observable<any> {
    const mailApi = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.post(mailApi, mailObject);
  }

  etherToWaves(conversionbject): Observable<any> {
    const etherToWavesApi = environment.apiUrl + 'convertEtherToBoltt';
    return this.apiGateWay(etherToWavesApi, 'post', conversionbject);
  }

  wavesToEther(conversionbject): Observable<any> {
    const wavesToEtherApi = environment.apiUrl + 'convertBolttCoinToEther';
    return this.apiGateWay(wavesToEtherApi, 'post', conversionbject);
  }
}
