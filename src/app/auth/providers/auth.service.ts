import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }

  // login(user: any) {
  //   let userData: any = {};
  //   userData.username = user.email;
  //   userData.password = user.password;
  //   userData.client_id = 'ac-NaYbDW8KERxa?3A!VyucF4LxJ!^J7';
  //   userData.client_secret = 'hw2D+Y8UWawgSzYuFFccKY+&Z2n&WQSR';
  //   userData.grant_type = 'password';
  //   userData.accessType = 'investorDashboard';
  //   return this.http.post('http://bolttdev.ap-south-1.elasticbeanstalk.com/oauth/login',
  //     userData
  //   );
  // }
  login(user: any) {
    let userData: any = new Object();
    userData.username = user.email;
    userData.password = user.password;
    userData.client_id = 'ac-NaYbDW8KERxa?3A!VyucF4LxJ!^J7';
    userData.client_secret = 'hw2D+Y8UWawgSzYuFFccKY+&Z2n&WQSR';
    userData.grant_type = 'password';
    userData.accessType = 'investorDashboard';
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json').set('Allow-Control-Allow-Origin', '*');

    return this.http.post('http://bolttdev.ap-south-1.elasticbeanstalk.com/oauth/login',
      {
        username: 'kuldeepkumar17@gmail.com',
        password: '123456',
        client_id: 'ac-NaYbDW8KERxa?3A!VyucF4LxJ!^J7',
        client_secret: 'hw2D+Y8UWawgSzYuFFccKY+&Z2n&WQSR',
        grant_type: 'password',
        accessType: 'investorDashboard',
      }
    );
  }

}
