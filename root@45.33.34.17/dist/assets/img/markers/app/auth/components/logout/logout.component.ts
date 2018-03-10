/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../providers/auth.service';

@Component({
  selector: 'nb-logout',
  template: `
    <div>Logging out, please wait...</div>
  `,
})
export class NbLogoutComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void { }

  logout(): void {
    console.log("testing");
    this.cleanUp();
    this.router.navigate(['auth']);
  }

  cleanUp() {
    delete window.localStorage.bolttAccessToken;
    window.sessionStorage.clear();
  }
}
