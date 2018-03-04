import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { NbAuthComponent } from './auth/components/auth.component';
import { NbRegisterComponent } from './auth/components/register/register.component';
import { AuthGuard } from './auth/providers/auth.gaurd';
import { NbRequestPasswordComponent } from './auth/components/request-password/request-password.component';

const routes: Routes = [
  { 
    path: 'pages', 
    loadChildren: 'app/pages/pages.module#PagesModule',
    canActivate: [AuthGuard]
  },
  { path: 'auth', component: NbAuthComponent },
  { path: 'register', component: NbRegisterComponent },
  { path: 'request-password', component: NbRequestPasswordComponent },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
