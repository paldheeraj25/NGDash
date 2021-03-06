import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { WalletRoutingModule } from './wallet-routing.module';
import { WalletInfoComponent } from './wallet-info/wallet-info.component';
import { NbLayoutModule, NbCardModule, NbCheckboxModule, NbTabsetModule } from '@nebular/theme';
import { ButtonsModule } from '../ui-features/buttons/buttons.module';
import { LiveTransactionComponent } from './live-transaction/live-transaction.component';


@NgModule({
  imports: [
    CommonModule,
    WalletRoutingModule,
    NbLayoutModule,
    NbCardModule,
    NbCheckboxModule,
    NbTabsetModule,
    ButtonsModule,
    Ng2SmartTableModule,
  ],
  declarations: [WalletInfoComponent, LiveTransactionComponent]
})
export class WalletModule { }
