/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthSocialLink } from '../../auth.options';
import { getDeepFromObject } from '../../helpers';

// import { NbAuthService } from '../../services/auth.service';
import { AuthService } from '../../providers/auth.service';
import { NbAuthResult } from '../../services/auth-result';

@Component({
  selector: 'nb-login',
  templateUrl: './login.component.html',
})
export class NbLoginComponent {
  provider: string = '';
  user: any = {};
  submitted = false;
  authFailure = false;
  userData:any = {};

  constructor( protected router: Router, private authService: AuthService ) { 
    this.cleanUp();
  }

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
  }
}
