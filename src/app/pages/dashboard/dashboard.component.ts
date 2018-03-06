import { UserService } from '../../@core/data/users.service';
import { Component, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { forEach, map } from 'lodash';

import { UserUtilityService } from '../providers/user-utility.service';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  themeName = 'default';
  settings: Array<any>;
  themeSubscription: any;
  heroInfoButton: any;
  public userAddreses: any;
  constructor(private themeService: NbThemeService, private utilityService: UserUtilityService, private userService: UserService) {
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


}
