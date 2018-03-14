/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService as facebook } from 'angular4-social-login';
import { SocialUser } from 'angular4-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angular4-social-login';
import { NbAuthSocialLink } from '../../auth.options';
import { getDeepFromObject } from '../../helpers';

// import { NbAuthService } from '../../services/auth.service';
import { AuthService } from '../../providers/auth.service';
import { NbAuthResult } from '../../services/auth-result';

declare let paypal: any;


@Component({
  selector: 'nb-login',
  templateUrl: './login.component.html',
  styles: ['./login.component.scss'],
})
export class NbLoginComponent implements OnInit {
  provider: string = '';
  user: any = {};
  submitted = false;
  authFailure = false;
  userData: any = {};

  private userSocial: SocialUser;
  private loggedIn: boolean;

  constructor(protected router: Router,
    private authService: AuthService,
    private facebookAuth: facebook,
  ) {
    this.cleanUp();
  }

  ngOnInit() {}

  signIn(): void {
    this.submitted = true;
    this.authService.login(this.user).subscribe(val => {
      this.userData = val;
      this.authService.setStorage(this.userData, this.user.rememberMe);
      this.router.navigateByUrl("pages/dashboard");
    },
      response => {
        this.submitted = false;
        this.authFailure = true;
      },
      () => {
        this.submitted = false;
      });
  }

  cleanUp() {
    this.authService.isLoggedIn = false;
    delete window.localStorage.bolttAccessToken;
    window.sessionStorage.clear();
  };

  signInWithFB(): void {
    console.log(FacebookLoginProvider.PROVIDER_ID);
    let self = this;
    this.facebookAuth.signIn(FacebookLoginProvider.PROVIDER_ID).then(function (data) {
      console.log(data);
      self.authService.facbookSignIn(data).subscribe(val => {
        console.log('inside servic call');
        self.userData = val;
        self.authService.setStorage(self.userData, self.user.rememberMe);
        self.router.navigateByUrl("pages/dashboard");
      },
        response => {
          self.submitted = false;
          self.authFailure = true;
        },
        () => {
          self.submitted = false;
        })
    });
  }

  // signOut(): void {
  //   this.auth.signOut();
  // }

}
