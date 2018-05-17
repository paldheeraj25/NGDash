import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../auth/providers/auth.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userDetails: any = {};

  constructor(private authService: AuthService, private http: HttpClient) { }

  ngOnInit() {
    this.userDetails = this.authService.getUser();
  }

}
