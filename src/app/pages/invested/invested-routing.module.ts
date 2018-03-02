import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvestedComponent } from './invested/invested.component';

const routes: Routes = [{
  path: '',
  component: InvestedComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestedRoutingModule { }
