import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KycRoutingModule } from './kyc-routing.module';
import { KycComponent } from './kyc/kyc.component';

@NgModule({
  imports: [
    CommonModule,
    KycRoutingModule
  ],
  declarations: [KycComponent],
})
export class KycModule { }
