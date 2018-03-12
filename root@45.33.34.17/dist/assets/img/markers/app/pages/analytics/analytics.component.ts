import { Component, OnInit } from '@angular/core';
import { NbThemeService, NbColorHelper } from '@nebular/theme';

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

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.tokenStatePie = {
        labels: ['Purchased', 'Reserved', 'Total Volume'],
        datasets: [{
          data: [300, 100, 500],
          backgroundColor: [colors.primaryLight, colors.infoLight, colors.successLight],
        }],
      };

      this.orderStatPie = {
        labels: ['New Orders', 'Pending Orders', 'Successful Orders'],
        datasets: [{
          data: [80, 20, 800],
          backgroundColor: [colors.primaryLight, colors.infoLight, colors.successLight],
        }],
      };

      this.totalInvestedPie = {
        labels: ['BTC', 'BCH', 'LTC', 'DASH', 'ETH', 'ETC', 'XMR', 'ZEC', 'NEO', 'XRP', 'DOGE', 'WAVES', 'STRAT'],
        datasets: [{
          data: [65, 59, 80, 81, 56, 55, 40, 12, 42, 13, 64, 62, 34],
          label: 'Total Invested',
          backgroundColor: NbColorHelper.hexToRgbA(colors.primaryLight, 0.8),
        }],
      };

      this.generateBarOptions(chartjs);
      this.generateBarOptions(chartjs);
    });
  }

  ngOnInit() {
  }

  onSelect(event) {
    console.log(event);
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
