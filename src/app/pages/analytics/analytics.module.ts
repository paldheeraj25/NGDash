import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartModule } from 'angular2-chartjs';
import { ChartsModule } from './../charts/charts.module';

import { NbLayoutModule, NbCardModule, NbCheckboxModule } from '@nebular/theme';
import { AnalyticsComponent } from './analytics.component';

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule,
    NbLayoutModule,
    NbCardModule,
    ChartsModule,
    NbCheckboxModule,
  ],
  declarations: [AnalyticsComponent]
})
export class AnalyticsModule { }
