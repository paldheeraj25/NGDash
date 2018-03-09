import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartModule } from 'angular2-chartjs';
import { ChartsModule } from './../charts/charts.module';


import { NbLayoutModule, NbCardModule, NbCheckboxModule, NbTabsetModule } from '@nebular/theme';
import { AnalyticsComponent } from './analytics.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  imports: [
    ThemeModule,
    CommonModule,
    NgxChartsModule,
    NbLayoutModule,
    NbCardModule,
    ChartsModule,
    ChartModule,
    NbCheckboxModule,
    NbTabsetModule,
    DashboardModule,
  ],
  declarations: [AnalyticsComponent],
})
export class AnalyticsModule { }
