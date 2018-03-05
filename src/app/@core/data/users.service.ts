import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { AuthService } from '../../auth/providers/auth.service';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';


let counter = 0;

@Injectable()
export class UserService {

  private user: any = {};

  private userArray: any[];
  private getAddress: string = 'http://bolttdev.ap-south-1.elasticbeanstalk.com/getPaymentAddress';
  private options: any;


  constructor(private authService: AuthService, private http: HttpClient) {
    let currentUser = this.authService.getUser();
    this.user.name = currentUser.user_details.first_name + ' ' + currentUser.user_details.last_name;
    this.user.picture = currentUser.user_details.profile_image;
  }

  getUser(): Observable<any> {
    return Observable.of(this.user);
  }


  createAuthorizationHeader(header: HttpHeaders) {
    header.append('Authorization', localStorage.getItem('key'));
  }

  getUserAddresses(): Observable<any> {
    let headers = new HttpHeaders;
    headers = headers.append('Authorization', window.sessionStorage.bolttAccessToken);
    return this.http.get(this.getAddress, { headers: headers });
  }
}
