import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EtherTransactionsComponent } from './ether-transactions.component';

const routes: Routes = [{
  path: '',
  component: EtherTransactionsComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EtherTransactionsRoutingModule { }
