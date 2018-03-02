import { AuthService } from './../../providers/auth.service';
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NB_AUTH_OPTIONS } from '../../auth.options';
import { getDeepFromObject } from '../../helpers';

import { NbAuthService } from '../../services/auth.service';
import { NbAuthResult } from '../../services/auth-result';

@Component({
  selector: 'nb-request-password-page',
  styleUrls: ['./request-password.component.scss'],
  templateUrl: './request-password.component.html'
})
export class NbRequestPasswordComponent {

  submitted = false;
  requestSuccess = false;
  registeredEmail = true;
  user: any = {};
  constructor(protected router: Router, private authService: AuthService) { }

  requestPass(): void {
    this.submitted = true;
    this.requestSuccess = false;
    this.user.password = "123456";
    this.authService.login(this.user).subscribe( res => {
      this.requestSuccess = true;
      this.registeredEmail = true;
    }, (error) => {
      this.submitted = false;
      this.registeredEmail = false;
    }, () => {
      this.submitted = false;
    });
  }
}
