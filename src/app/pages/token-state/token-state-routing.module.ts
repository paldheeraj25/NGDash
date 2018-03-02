import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TokenStateComponent } from './token-state/token-state.component';

const routes: Routes = [{
  path: '',
  component: TokenStateComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TokenStateRoutingModule { }
