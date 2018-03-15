import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BountyComponent } from './bounty/bounty.component';

const routes: Routes = [
  {
    path: '',
    component: BountyComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BountyRoutingModule { }
