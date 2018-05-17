import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../../auth/providers/auth.service';
import { NgbDatepickerConfig, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { UserUtilityService } from './../../../pages/providers/user-utility.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  submitted = false;
  message: string;
  error: string;
  user: any = {};
  changeProfileUrl: string;
  dt;
  countries = [];

  constructor(private authService: AuthService, private userUtilityService: UserUtilityService) {

  }

  ngOnInit() {
    const user = this.authService.getUser();
    this.user = user.user_details;
    this.user.dob = new Date(this.user.dob);
    this.userUtilityService.apiGateWay('assets/mock/countries-mock.json', 'get').subscribe(data => {
      this.countries = data;
      this.user.country = this.user.country ? this.user.country : this.countries[0].name;
    });
  }

  editProfile() {
    this.changeProfileUrl = environment.apiUrl + "editInvestorProfile";
    this.submitted = true;
    this.userUtilityService.apiGateWay(this.changeProfileUrl, 'post', this.user).subscribe(response => {
      let user = this.authService.getUser();
      console.log(user);
      user.user_details = response.data;
      window['sessionStorage'].bolttUser = JSON.stringify(user);
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
