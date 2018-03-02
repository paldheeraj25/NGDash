import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderStateComponent } from './order-state/order-state.component';

const routes: Routes = [{
  path: '',
  component: OrderStateComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderStateRoutingModule { }
