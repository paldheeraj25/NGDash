import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WalletInfoComponent } from './wallet-info/wallet-info.component';


const routes: Routes = [{
  path: 'wallet-info',
  component: WalletInfoComponent,
},
{
  path: 'go-to-wallet',
  component: WalletInfoComponent,
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalletRoutingModule { }
