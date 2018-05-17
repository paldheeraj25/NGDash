import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlockSwapComponent } from './block-swap/block-swap.component';

const routes: Routes = [{
  path: '',
  component: BlockSwapComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlockSwapRoutingModule { }
