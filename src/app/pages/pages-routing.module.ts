import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TokenStateComponent } from './token-state/token-state/token-state.component';
import { OrderStateComponent } from './order-state/order-state/order-state.component';
import { InvestedComponent } from './invested/invested/invested.component';
import { TdeComponent } from './tde/tde/tde.component';
import { ProfileComponent } from './profile/profile.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { EditProfileComponent } from './user-profile/edit-profile/edit-profile.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'analytics',
    component: AnalyticsComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'token-stats',
    component: TokenStateComponent,
  },
  {
    path: 'profile',
    component: EditProfileComponent,
  },
  {
    path: 'order-stats',
    component: OrderStateComponent,
  },
  {
    path: 'invested',
    component: InvestedComponent,
  },
  {
    path: 'tde',
    component: TdeComponent,
  },
  {
    path: 'ui-features',
    loadChildren: './ui-features/ui-features.module#UiFeaturesModule',
  }, {
    path: 'components',
    loadChildren: './components/components.module#ComponentsModule',
  }, {
    path: 'maps',
    loadChildren: './maps/maps.module#MapsModule',
  }, {
    path: 'charts',
    loadChildren: './charts/charts.module#ChartsModule',
  }, {
    path: 'editors',
    loadChildren: './editors/editors.module#EditorsModule',
  }, {
    path: 'forms',
    loadChildren: './forms/forms.module#FormsModule',
  }, {
    path: 'tables',
    loadChildren: './tables/tables.module#TablesModule',
  }, {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'wallet',
    loadChildren: './wallet/wallet.module#WalletModule',
  },
  {
    path: 'user-profile',
    loadChildren: './user-profile/user-profile.module#UserProfileModule',
  },
  {
    path: 'referal',
    loadChildren: './bounty/bounty.module#BountyModule',
  },
  {
    path: 'ERC-20',
    loadChildren: './erc20/erc20.module#Erc20Module',
  },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
