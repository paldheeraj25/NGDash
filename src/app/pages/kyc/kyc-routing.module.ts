import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KycComponent } from './kyc/kyc.component';

const routes: Routes = [{
  path: '',
  component: KycComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KycRoutingModule { }
