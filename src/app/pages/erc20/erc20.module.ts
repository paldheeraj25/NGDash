import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Erc20Component } from './erc20/erc20.component';
import { Erc20RoutingModule } from './erc20-routing.module';



@NgModule({
  imports: [
    CommonModule,
    Erc20RoutingModule,
  ],
  declarations: [Erc20Component],
})
export class Erc20Module { }
