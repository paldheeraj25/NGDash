import { Component, OnInit } from '@angular/core';
import { NbThemeService, NbColorHelper } from '@nebular/theme';
import { PaymentService } from '../providers/payment.service';
import { keys, values } from 'lodash';


@Component({
  selector: 'analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {

  // pie data.
  tokenStatePie: any;
  orderStatPie: any;
  totalInvestedPie: any;
  pieOptions: any;
  barOptions: any;
  themeSubscription: any;

  temperature = 24;
  temperatureOff = false;
  temperatureMode = 'cool';

  humidity = 87;
  humidityOff = false;
  humidityMode = 'heat';

  constructor(private theme: NbThemeService, private analytics: PaymentService) {
  }

  ngOnInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;
      this.analytics.getAnalyticsData().subscribe(response => {

        // token state
        this.tokenStatePie = {
          labels: keys(response.data.token_state),
          datasets: [{
            data: values(response.data.token_state),
            backgroundColor: [colors.primaryLight, colors.infoLight, colors.successLight],
          }],
        };
        // order state
        this.orderStatPie = {
          labels: keys(response.data.order_state),
          datasets: [{
            data: values(response.data.order_state),
            backgroundColor: [colors.primaryLight, colors.infoLight, colors.successLight],
          }],
        };

        // total invested
        this.totalInvestedPie = {
          labels: keys(response.data.total_investment),
          datasets: [{
            data: values(response.data.total_investment),
            label: 'Total Invested',
            backgroundColor: NbColorHelper.hexToRgbA(colors.primaryLight, 0.8),
          }],
        };
        return response.data;
      });

      this.generateBarOptions(chartjs);
      this.generateBarOptions(chartjs);
      this.getInvestCountData();
    });
  }

  onSelect(event) {
    console.log(event);
  }

  getInvestCountData() {
    return this.analytics.getInvestCountData().subscribe(response => {
      this.temperature = response.data;
    });
  }

  generatePieOptions(chartjs) {
    this.pieOptions = {
      maintainAspectRatio: false,
      responsive: true,
      scales: {
        xAxes: [
          {
            display: false,
          },
        ],
        yAxes: [
          {
            display: false,
          },
        ],
      },
      legend: {
        labels: {
          fontColor: chartjs.textColor,
        },
      },
    };
  }

  generateBarOptions(chartjs) {
    this.barOptions = {
      maintainAspectRatio: false,
      responsive: true,
      legend: {
        labels: {
          fontColor: chartjs.textColor,
        },
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              display: false,
              color: chartjs.axisLineColor,
            },
            ticks: {
              fontColor: chartjs.textColor,
            },
          },
        ],
        yAxes: [
          {
            gridLines: {
              display: true,
              color: chartjs.axisLineColor,
            },
            ticks: {
              fontColor: chartjs.textColor,
            },
          },
        ],
      },
    };
  }
}
