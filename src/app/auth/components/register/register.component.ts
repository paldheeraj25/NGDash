import { AuthService } from './../../providers/auth.service';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import {NgbDatepickerConfig, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'nb-register',
  styleUrls: ['./register.component.scss'],
  templateUrl: './register.component.html'
})
export class NbRegisterComponent {

  submitted = false;
  registerFailure = false;
  user: any = {};

  constructor(protected router: Router, private authService: AuthService, config: NgbDatepickerConfig) {
    config.minDate = {year: 1900, month: 1, day: 1};
    config.maxDate = {year: 2099, month: 12, day: 31};
  }

  register(): void {
    this.submitted = true;
    console.log(this.user);
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
}
