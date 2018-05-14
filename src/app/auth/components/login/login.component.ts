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
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


// import { NbAuthService } from '../../services/auth.service';
import { AuthService } from '../../providers/auth.service';
import { NbAuthResult } from '../../services/auth-result';
import { LoginOtpComponent } from '../login-otp/login-otp.component';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import 'style-loader!angular2-toaster/toaster.css';

declare let paypal: any;


@Component({
  selector: 'nb-login',
  templateUrl: './login.component.html',
  styles: ['./login.component.scss'],
})
export class NbLoginComponent implements OnInit {
  provider: string = '';
  user: any = {};
  submitted = true;
  authFailure = false;
  userData: any = {};

  private userSocial: SocialUser;
  private loggedIn: boolean;

  // toaster config
  config: ToasterConfig;

  position = 'toast-top-right';
  animationType = 'fade';
  title = 'Incorrect OTP';
  content = `Please check your otp and try to sign in again.`;
  timeout = 5000;
  toastsLimit = 5;
  type = 'error';

  isNewestOnTop = true;
  isHideOnClick = true;
  isDuplicatesPrevented = false;
  isCloseButton = true;

  //

  constructor(protected router: Router,
    private authService: AuthService,
    private facebookAuth: facebook,
    private modalService: NgbModal,
    private toasterService: ToasterService,
  ) {
    this.cleanUp();
  }

  ngOnInit() { }

  signIn(): void {
    this.submitted = true;
    this.authService.login(this.user).subscribe(val => {
      console.log(val);
      this.userData = val;
      this.authService.setStorage(this.userData, this.user.rememberMe);
      const modalRef = this.modalService.open(LoginOtpComponent, { size: 'lg', container: 'nb-layout' });
      modalRef.componentInstance.userId = val.user_details.user_id_pk;
      modalRef.result.then((data) => {
        if (data.msg === 'Verified Successfully') {
          this.router.navigateByUrl("pages/kyc");
        } else {
          this.makeToast();
          this.router.navigateByUrl("auth/login");
        }
        // on close
      }, (reason) => {
        // on dismiss
      });
      // this.userData = val;
      // this.authService.setStorage(this.userData, this.user.rememberMe);
      // this.router.navigateByUrl("pages/dashboard");
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
    let self = this;
    this.facebookAuth.signIn(FacebookLoginProvider.PROVIDER_ID).then(function (data) {
      console.log(data);
      self.authService.facbookSignIn(data).subscribe(val => {
        console.log('inside servic call');
        self.userData = val;
        self.authService.setStorage(self.userData, self.user.rememberMe);
        self.router.navigateByUrl("pages/kyc");
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

  resolved(captchaResponse: string) {
    // console.log(`Resolved captcha with response ${captchaResponse}:`);
    this.submitted = false;
  }

  makeToast() {
    this.showToast(this.type, this.title, this.content);
  }

  private showToast(type: string, title: string, body: string) {
    this.config = new ToasterConfig({
      positionClass: this.position,
      timeout: this.timeout,
      newestOnTop: this.isNewestOnTop,
      tapToDismiss: this.isHideOnClick,
      preventDuplicates: this.isDuplicatesPrevented,
      animation: this.animationType,
      limit: this.toastsLimit,
    });
    const toast: Toast = {
      type: type,
      title: title,
      body: body,
      timeout: this.timeout,
      showCloseButton: this.isCloseButton,
      bodyOutputType: BodyOutputType.TrustedHtml,
    };
    this.toasterService.popAsync(toast);
  }

  clearToasts() {
    this.toasterService.clear();
  }
}
