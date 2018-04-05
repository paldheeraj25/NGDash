import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Erc20Component } from './erc20/erc20.component';

const routes: Routes = [{
  path: '',
  component: Erc20Component,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Erc20RoutingModule { }
