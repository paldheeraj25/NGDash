import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WalletInfoComponent } from './wallet-info/wallet-info.component';
import { LiveTransactionComponent } from './live-transaction/live-transaction.component';
import { DexComponent } from './dex/dex.component';



const routes: Routes = [{
  path: 'wallet-info',
  component: WalletInfoComponent,
},
{
  path: 'go-to-wallet',
  component: WalletInfoComponent,
},
{
  path: 'live-transaction',
  component: LiveTransactionComponent,
},
{
  path: 'dex',
  component: DexComponent,
},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalletRoutingModule { }
