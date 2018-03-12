import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent {

  redirectDelay: number = 0;
  showMessages: any = {};
  provider: string = '';

  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  user: any = {};

  constructor() {

  }

  resetPass(): void {
    this.errors = this.messages = [];
    this.submitted = true;
  }

  getConfigValue(key: string): any {
  }

}
