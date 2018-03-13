import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LoginHistoryComponent } from './login-history/login-history.component';

const routes: Routes = [{
  path: 'change-password',
  component: ChangePasswordComponent,
},
{
  path: 'login-history',
  component: LoginHistoryComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserProfileRoutingModule { }
