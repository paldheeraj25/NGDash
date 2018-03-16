import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../../auth/providers/auth.service';
import {NgbDatepickerConfig, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

import { UserUtilityService } from './../../../pages/providers/user-utility.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent {

  submitted = false;
  message: string;
  error: string;
  user: any = {};
  changeProfileUrl: string;

  constructor(private authService: AuthService, config: NgbDatepickerConfig, private userUtilityService: UserUtilityService) {
    const user = this.authService.getUser();
    this.user = user.user_details;
    config.minDate = {year: 1900, month: 1, day: 1};
    config.maxDate = {year: 2099, month: 12, day: 31};
  }

  editProfile() {
    this.changeProfileUrl = environment.apiUrl + "editInvestorProfile";
    this.submitted = true;
    this.userUtilityService.apiGateWay(this.changeProfileUrl, 'post', this.user).subscribe(response => {
      this.submitted = false;
      this.message = "Profile has been updated successfully";
      this.error = undefined;
    }, error => {
      this.submitted = false;
      this.message = undefined;
      this.error = "Profile could not be updated now. Please try again";
    })
  }

}
