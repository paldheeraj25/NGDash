import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  public getAddress: string = 'http://bolttdev.ap-south-1.elasticbeanstalk.com/getPaymentAddress';
  constructor(private http: HttpClient) { }

  createAuthorizationHeader(header: HttpHeaders) {
    header.append('Authorization', window['localstorage'].getItem('bolttAccessToken'));
  }

  getUserAddresses() {
    console.log('inside get user address');
    let headers = new HttpHeaders;
    this.createAuthorizationHeader(headers);
    console.log(headers);
    this.http.get(this.getAddress, { headers: headers });
  }

}
