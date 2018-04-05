import { HttpClient } from '@angular/common/http';
import { AuthService } from './../../providers/auth.service';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDatepickerConfig, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { UserUtilityService } from './../../../pages/providers/user-utility.service';

@Component({
  selector: 'nb-register',
  styleUrls: ['./register.component.scss'],
  templateUrl: './register.component.html'
})
export class NbRegisterComponent {

  submitted = true;
  registerFailure = false;
  user: any = {};
  countries = [];

  constructor(protected router: Router, private authService: AuthService, private http: HttpClient) {
    this.http.get<any>('assets/mock/countries-mock.json').subscribe(data => {
      this.countries = data;
      this.user.country = this.countries[0].name;
    });
  }

  register(): void {
    this.submitted = true;
    this.authService.register(this.user).subscribe(response => {
      this.router.navigate(['login']);
      this.submitted = false;
    },
      error => {
        this.submitted = false;
        this.registerFailure = true;
      },
      () => {
        this.submitted = false;
      });

  }

  resolved(captchaResponse: string) {
    // console.log(`Resolved captcha with response ${captchaResponse}:`);
    this.submitted = false;
  }
}
