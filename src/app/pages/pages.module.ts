import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { TokenStateModule } from './token-state/token-state.module';
import { OrderStateModule } from './order-state/order-state.module';
import { InvestedModule } from './invested/invested.module';
import { TdeModule } from './tde/tde.module';
import { ProfileComponent } from './profile/profile.component';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    TokenStateModule,
    OrderStateModule,
    InvestedModule,
    TdeModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    ProfileComponent,
  ],
})
export class PagesModule {
}
