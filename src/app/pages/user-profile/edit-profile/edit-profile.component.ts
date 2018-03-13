import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../../auth/providers/auth.service';
import {NgbDatepickerConfig, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent {

  redirectDelay: number = 0;
  showMessages: any = {};
  provider: string = '';

  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  user: any = {};

  constructor(private authService: AuthService, config: NgbDatepickerConfig) {
    const user = this.authService.getUser();
    this.user = user.user_details;
    config.minDate = {year: 1900, month: 1, day: 1};
    config.maxDate = {year: 2099, month: 12, day: 31};
  }

  editProfile() {
    this.user.dateOfBirth = this.user.dob.day + "/" + this.user.dob.month + "/" + this.user.dob.year;
    this.user.dob = undefined;
    console.log("edit profile ", this.user);
  }

}
