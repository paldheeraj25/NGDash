import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NbLayoutModule, NbCardModule, NbCheckboxModule } from '@nebular/theme';

import { BlockSwapRoutingModule } from './block-swap-routing.module';
import { BlockSwapComponent } from './block-swap/block-swap.component';

@NgModule({
  imports: [
    CommonModule,
    BlockSwapRoutingModule,
    FormsModule,
    NbLayoutModule,
    NbCardModule,
  ],
  declarations: [BlockSwapComponent],
})
export class BlockSwapModule { }
