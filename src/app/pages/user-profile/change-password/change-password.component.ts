import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserUtilityService } from './../../../pages/providers/user-utility.service';
import { environment } from '../../../../environments/environment';

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

  resetPassUrl = environment.apiUrl + "updatePassword";
  constructor( private userUtilityService: UserUtilityService) { }

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

}
