import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../@theme/theme.module';

import { OrderStateRoutingModule } from './order-state-routing.module';
import { OrderStateComponent } from './order-state/order-state.component';
import { OrderStateService } from './order-state.service';

@NgModule({
  imports: [
    CommonModule,
    OrderStateRoutingModule,
    ThemeModule,
  ],
  declarations: [OrderStateComponent],
  providers: [
    OrderStateService
  ],
})
export class OrderStateModule { }
