import { Component, OnInit } from '@angular/core';
import { ShareButtons } from '@ngx-share/core';

@Component({
  selector: 'bounty',
  templateUrl: './bounty.component.html',
  styleUrls: ['./bounty.component.scss']
})
export class BountyComponent implements OnInit {

  twitter = 'boltt.com';
  constructor(public share: ShareButtons) { }

  ngOnInit() {
  }

  aftershare(event: any) {
    console.log(event);
  }
}
