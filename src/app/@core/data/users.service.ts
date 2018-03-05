import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { AuthService } from '../../auth/providers/auth.service';

let counter = 0;

@Injectable()
export class UserService {

  private user:any = {};

  private userArray: any[];

  constructor(private authService: AuthService) {
    let currentUser = this.authService.getUser();
    this.user.name = currentUser.user_details.first_name + ' ' + currentUser.user_details.last_name;
    this.user.picture = currentUser.user_details.profile_image;
  }

  getUser(): Observable<any> {
    return Observable.of(this.user);
  }
}
