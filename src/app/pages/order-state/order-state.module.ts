import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderStateRoutingModule } from './order-state-routing.module';
import { OrderStateComponent } from './order-state/order-state.component';

@NgModule({
  imports: [
    CommonModule,
    OrderStateRoutingModule,
  ],
  declarations: [OrderStateComponent],
})
export class OrderStateModule { }
