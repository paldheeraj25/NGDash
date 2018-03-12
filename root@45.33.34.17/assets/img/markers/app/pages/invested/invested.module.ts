import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestedRoutingModule } from './invested-routing.module';
import { InvestedComponent } from './invested/invested.component';

@NgModule({
  imports: [
    CommonModule,
    InvestedRoutingModule,
  ],
  declarations: [InvestedComponent],
})
export class InvestedModule { }
