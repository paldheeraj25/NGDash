import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalletRoutingModule } from './wallet-routing.module';
import { WalletInfoComponent } from './wallet-info/wallet-info.component';
import { NbLayoutModule, NbCardModule, NbCheckboxModule, NbTabsetModule } from '@nebular/theme';
import { ButtonsModule } from '../ui-features/buttons/buttons.module';


@NgModule({
  imports: [
    CommonModule,
    WalletRoutingModule,
    NbLayoutModule,
    NbCardModule,
    NbCheckboxModule,
    NbTabsetModule,
    ButtonsModule,
  ],
  declarations: [WalletInfoComponent]
})
export class WalletModule { }
