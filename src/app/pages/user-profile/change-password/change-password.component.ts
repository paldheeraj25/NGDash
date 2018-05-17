import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { UserUtilityService } from './../../../pages/providers/user-utility.service';
import { environment } from '../../../../environments/environment';
import { AuthService } from './../../../auth/providers/auth.service';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent {

  provider: string = '';
  submitted = false;
  user: any = {};
  message: string;
  error: string;
  forgotPassword = false;
  otpSuccess = false;
  otpFailure = false;
  confirmPassword: any = 'password';

  resetPassUrl = environment.apiUrl + "updatePassword";
  constructor(private userUtilityService: UserUtilityService, private authService: AuthService) { }

  resetPass() {
    this.submitted = true;
    this.userUtilityService.apiGateWay(this.resetPassUrl, 'post', this.user).subscribe(response => {
      this.submitted = false;
      this.message = "Password has been reset successfully";
      this.error = undefined;
    }, error => {
      this.submitted = false;
      this.message = undefined;
      this.error = "Password is not reset. Please try again";
    })
  }

  forgotAPI() {
    if (!this.forgotPassword) {
      return;
    }
    this.submitted = true;
    const user = this.authService.getUser();
    this.user = user.user_details;
    this.authService.forgotPassword(this.user.email).subscribe(res => {
      this.submitted = false;
      this.otpSuccess = true;
      this.otpFailure = false;
    }, (error) => {
      this.submitted = false;
      this.otpSuccess = false;
      this.otpFailure = true;
    });
  }

}
