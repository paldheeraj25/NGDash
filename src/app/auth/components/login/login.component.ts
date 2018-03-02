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

  redirectDelay: number = 0;
  showMessages: any = {};
  provider: string = '';

  errors: string[] = [];
  messages: string[] = [];
  user: any = {};
  submitted: boolean = false;
  socialLinks: NbAuthSocialLink[] = [];

  constructor(// protected service: NbAuthService,
    protected router: Router, private authService: AuthService) {
    console.warn('test component');
    this.redirectDelay = this.getConfigValue('forms.login.redirectDelay');
    this.showMessages = this.getConfigValue('forms.login.showMessages');
    this.provider = this.getConfigValue('forms.login.provider');
    this.socialLinks = this.getConfigValue('forms.login.socialLinks');
  }

  login(): void {
    this.errors = this.messages = [];
    this.submitted = true;
  }

  getConfigValue(key: string): any {
    // return getDeepFromObject(this.config, key, null);
  }

  signIn(): void {
    console.warn('login test');
    this.authService.login().subscribe(val => {
      console.warn("PUT call successful value returned in body",
        val);
    },
      response => {
        console.warn("PUT call in error", response);
      },
      () => {
        console.warn("The PUT observable is now completed.");
      });
  }
}
