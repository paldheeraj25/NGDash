import { Component, Input, OnInit } from '@angular/core';
import { find } from 'lodash';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { PaymentService } from '../../../pages/providers/payment.service';
import { AuthService } from '../../../auth/providers/auth.service';


@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {


  @Input() position = 'normal';

  user: any;
  balance: string = '';

  userMenu = [{ title: 'Profile', link: '/pages/profile', icon: 'nb-compose' },
  { title: 'Log out', link: '/auth', icon: 'nb-gear' }];

  constructor(private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private userService: UserService,
    private analyticsService: AnalyticsService,
    private payment: PaymentService,
    private authService: AuthService) {
  }

  ngOnInit() {
    this.autoLogout();
    this.getWalletInfo();
    this.userService.getUser()
      .subscribe((users: any) => this.user = users);
  }

  autoLogout() {
    setInterval(() => {
      if(this.authService.getToken()){
        this.authService.logout();
      }
    }, 20*60*6000);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }

  logout() {
    console.log("testing");
  }

  onMenuClick(event) {
    console.log('logout test', event);
  }

  getWalletInfo() {
    const user = this.authService.getUser();
    this.payment.getUserWaveAsset({ user_id: user.user_details.user_id_pk }).subscribe(response => {
      this.balance = find(response.data, { name: 'KDP' }).balance;
    });
  }
}
