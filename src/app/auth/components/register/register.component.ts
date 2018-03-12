import { AuthService } from './../../providers/auth.service';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

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
