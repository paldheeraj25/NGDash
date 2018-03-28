import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Erc20Component } from './erc20/erc20.component';
import { Erc20RoutingModule } from './erc20-routing.module';
import { FormsModule } from '@angular/forms';
import { NbLayoutModule, NbCardModule, NbCheckboxModule } from '@nebular/theme';



@NgModule({
  imports: [
    CommonModule,
    Erc20RoutingModule,
    FormsModule,
    NbLayoutModule,
    NbCardModule,
    NbCheckboxModule,
  ],
  declarations: [Erc20Component],
})
export class Erc20Module { }
