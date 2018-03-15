import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClientJsonpModule } from '@angular/common/http';

import { BountyRoutingModule } from './bounty-routing.module';
import { BountyComponent } from './bounty/bounty.component';
import { ShareButtonModule } from '@ngx-share/button';
import { ShareButtonsModule } from '@ngx-share/buttons';

@NgModule({
  imports: [
    CommonModule,
    BountyRoutingModule,
    HttpClientModule,      // (Required) for share counts
    HttpClientJsonpModule, // (Optional) For linkedIn & Tumblr counts
    ShareButtonModule.forRoot(),
    ShareButtonsModule.forRoot()
  ],
  declarations: [BountyComponent],
})
export class BountyModule { }
