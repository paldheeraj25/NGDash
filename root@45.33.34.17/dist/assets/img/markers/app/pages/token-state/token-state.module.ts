import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TokenStateRoutingModule } from './token-state-routing.module';
import { TokenStateComponent } from './token-state/token-state.component';

@NgModule({
  imports: [
    CommonModule,
    TokenStateRoutingModule,
  ],
  declarations: [TokenStateComponent],
})
export class TokenStateModule { }
