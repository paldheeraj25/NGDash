import { HttpClient } from '@angular/common/http';
import { AuthService } from './../../providers/auth.service';
import { Component, Inject, ViewContainerRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbDatepickerConfig, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { UserUtilityService } from './../../../pages/providers/user-utility.service';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'nb-register',
  styleUrls: ['./register.component.scss'],
  templateUrl: './register.component.html'
})
export class NbRegisterComponent implements OnInit {

  submitted = true;
  registerFailure = false;
  user: any = {};
  countries = [];
  refralCode: string;

  constructor(protected router: Router, private authService: AuthService,
    private http: HttpClient, private toastr: ToastsManager, vRef: ViewContainerRef, private route: ActivatedRoute) {
    this.http.get<any>('assets/mock/countries-mock.json').subscribe(data => {
      this.countries = data;
      this.user.country = this.countries[0].name;
    });
    this.toastr.setRootViewContainerRef(vRef);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['refCode']) {
        this.user.referral_code = params['refCode'];
      }
    });
  }

  register(): void {
    this.submitted = true;
    this.authService.register(this.user).subscribe(response => {
      this.toastr.success('Registration Successful', 'Success!');
      this.submitted = false;
      setTimeout(() => {
        this.router.navigate(['login']);
      }, 2000);
    },
      error => {
        this.toastr.error('Registration failed', 'Oops!');
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
