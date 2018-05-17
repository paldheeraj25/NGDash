import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { EtherTransactionsRoutingModule } from './ether-transactions-routing.module';
import { EtherTransactionsComponent } from './ether-transactions.component';
import { NbLayoutModule, NbCardModule, NbCheckboxModule, NbTabsetModule } from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    EtherTransactionsRoutingModule,
    Ng2SmartTableModule,
    NbLayoutModule,
    NbCardModule,
  ],
  declarations: [EtherTransactionsComponent],
})
export class EtherTransactionsModule { }
