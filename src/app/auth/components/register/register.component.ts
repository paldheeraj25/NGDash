import { AuthService } from './../../providers/auth.service';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

// import { NbAuthService } from '../../services/auth.service';
// import { NbAuthResult } from '../../services/auth-result';


@Component({
  selector: 'nb-register',
  styleUrls: ['./register.component.scss'],
  templateUrl: './register.component.html'
})
export class NbRegisterComponent {

  submitted = false;
  registerFailure = false;
  user: any = {};

  constructor(protected router: Router, private authService: AuthService) {
  }

  register(): void {
    this.submitted = true;
    console.log(this.user);
    this.submitted = false;
    this.authService.login(this.user).subscribe(val => {
      console.log("success");
    },
    response => {
      console.log("failure");
      this.submitted = false;
      this.registerFailure = true;
    },
    () => {
      this.submitted = false;
    });

  }
}
