import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { TokenStateModule } from './token-state/token-state.module';
import { OrderStateModule } from './order-state/order-state.module';
import { InvestedModule } from './invested/invested.module';
import { TdeModule } from './tde/tde.module';
import { PaymentService } from './providers/payment.service';
import { ProfileComponent } from './profile/profile.component';
import { AnalyticsModule } from './analytics/analytics.module';
import { UserService } from './providers/user.service';
import { UserUtilityService } from './providers/user-utility.service';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    AnalyticsModule,
    TokenStateModule,
    OrderStateModule,
    InvestedModule,
    TdeModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    ProfileComponent,
  ],
  providers: [
    UserUtilityService,
    PaymentService,
    UserService,
  ],
})
export class PagesModule {
}
