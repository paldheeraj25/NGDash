import { AuthService } from './../../providers/auth.service';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

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
    this.authService.register(this.user).subscribe(response => {
      console.log(response);
    },
    response => {
      this.submitted = false;
      this.registerFailure = true;
    },
    () => {
      this.submitted = false;
    });

  }
}
