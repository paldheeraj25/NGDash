import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../@theme/theme.module';

import { OrderStateRoutingModule } from './order-state-routing.module';
import { OrderStateComponent } from './order-state/order-state.component';

@NgModule({
  imports: [
    CommonModule,
    OrderStateRoutingModule,
    ThemeModule,
  ],
  declarations: [OrderStateComponent],
})
export class OrderStateModule { }
