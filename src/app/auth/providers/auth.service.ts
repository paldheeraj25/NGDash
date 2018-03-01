import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {

  public userData: any;
  public headers: any;
  constructor(private http: HttpClient) { }

  login() {
    this.userData = new Object();
    this.userData.username = 'kuldeepkumar17@gmail.com';
    this.userData.password = '123456';
    this.userData.client_id = 'ac-NaYbDW8KERxa?3A!VyucF4LxJ!^J7';
    this.userData.client_secret = 'hw2D+Y8UWawgSzYuFFccKY+&Z2n&WQSR';
    this.userData.grant_type = 'password';
    this.userData.accessType = 'investorDashboard';

    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.headers = new HttpHeaders().set('Allow-Control-Allow-Origin', '*');
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json').set('Allow-Control-Allow-Origin', '*');
    // Allow-Control-Allow-Origin: * -
    console.warn(this.userData);

    return this.http.post('http://bolttdev.ap-south-1.elasticbeanstalk.com/oauth/login',
      {
        username: 'kuldeepkumar17@gmail.com',
        password: '123456',
        client_id: 'ac-NaYbDW8KERxa?3A!VyucF4LxJ!^J7',
        client_secret: 'hw2D+Y8UWawgSzYuFFccKY+&Z2n&WQSR',
        grant_type: 'password',
        accessType: 'investorDashboard',
      },
      // {
      //   headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*', 'Content-Type': 'text/html' }),
      // },
    );
  }

}
