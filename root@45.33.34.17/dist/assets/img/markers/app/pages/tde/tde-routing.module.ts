import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TdeComponent } from './tde/tde.component';

const routes: Routes = [{
  path: '',
  component: TdeComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TdeRoutingModule { }

