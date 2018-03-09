import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserService } from '../../@core/data/users.service';
import { NbThemeService } from '@nebular/theme';
import { forEach, map } from 'lodash';

import { UserUtilityService } from '../providers/user-utility.service';

declare let paypal: any;

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, AfterViewInit {
  themeName = 'default';
  settings: Array<any>;
  themeSubscription: any;
  heroInfoButton: any;
  public userAddreses: any;
  constructor(private themeService: NbThemeService,
    private utilityService: UserUtilityService,
    private userService: UserService) {
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.themeName = theme.name;
      this.init(theme.variables);
    });
  }

  // init for button
  init(colors: any) {
    this.settings = [];

    this.heroInfoButton = {
      class: 'btn-hero-info',
      container: 'info-container',
      title: 'Info Button',
      buttonTitle: 'Info',
      default: {
        gradientLeft: `adjust-hue(${colors.info}, -10deg)`,
        gradientRight: colors.info,
      },
      cosmic: {
        gradientLeft: `adjust-hue(${colors.info}, -10deg)`,
        gradientRight: colors.info,
        bevel: `shade(${colors.info}, 14%)`,
        shadow: 'rgba (33, 7, 77, 0.5)',
        glow: `adjust-hue(${colors.info}, -5deg)`,
      },
    };
  }

  ngOnInit() {
    this.utilityService.getUserAddresses().subscribe(val => {
      this.userAddreses = map(JSON.parse(val.data), ((value, key) => {
        return { name: key, address: value, image: 'assets/images/' + key + '.png' };
      }));
    });
  }

  // paypal
  ngAfterViewInit(): void {
    this.loadExternalScript("https://www.paypalobjects.com/api/checkout.js").then(() => {
      paypal.Button.render({
        env: 'sandbox',
        client: {
          production: 'AR_eFIArAhKJsKijJeSEreW2RI8NPYsAHQdw6QFJgGZQfNHi27O_hUkFruRqZThMJIteaifh6-4EmHQu',
          sandbox: 'AR_eFIArAhKJsKijJeSEreW2RI8NPYsAHQdw6QFJgGZQfNHi27O_hUkFruRqZThMJIteaifh6-4EmHQu',
        },
        commit: true,
        payment: function (data, actions) {
          return actions.payment.create({
            payment: {
              transactions: [
                {
                  amount: { total: '1.00', currency: 'USD' },
                },
              ],
            },
          })
        },
        onAuthorize: function (data, actions) {
          return actions.payment.execute().then(function (payment) {
            // TODO
            console.log('paypal response');
            console.log(payment);
          })
        },
      }, '#paypal-button');
    });
  }

  private loadExternalScript(scriptUrl: string) {
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script')
      scriptElement.src = scriptUrl
      scriptElement.onload = resolve
      document.body.appendChild(scriptElement)
    });
  }

}
