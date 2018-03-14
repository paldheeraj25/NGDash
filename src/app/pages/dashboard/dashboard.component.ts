import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserService } from '../../@core/data/users.service';
import { NbThemeService } from '@nebular/theme';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { forEach, map } from 'lodash';

import { UserUtilityService } from '../providers/user-utility.service';
import { PaymentService } from '../providers/payment.service';
import { ModalComponent } from './status-card/modal/modal.component';
import { LandingPopupComponent } from './landing-popup/landing-popup.component';


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
  public currencyPrice: any;
  initialDisclaimer: boolean;
  storage: string;

  constructor(private themeService: NbThemeService,
    private utilityService: UserUtilityService,
    private userService: UserService,
    private payment: PaymentService,
    private modalService: NgbModal,
    private spinnerService: Ng4LoadingSpinnerService) {
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
    this.spinnerService.show();
    this.payment.getConversionRate().subscribe(response => {
      this.currencyPrice = response.data;
      this.utilityService.getUserAddresses().subscribe(val => {
        this.userAddreses = map(JSON.parse(val.data), ((value, key) => {
          this.spinnerService.hide();
          return { name: key, address: value, image: 'assets/images/' + key + '.png' };
        }));
        if (!window.localStorage.getItem('initialDisclaimer')) {
          this.landingPopup();
        }
      });
    })
  }

  // paypal
  ngAfterViewInit(): void {
  }

  private loadExternalScript(scriptUrl: string) {

  }

  openOrderPaypal(): void {
    const activeModal = this.modalService.open(ModalComponent, { size: 'lg', container: 'nb-layout' });

    activeModal.componentInstance.paymentType = 3;
    activeModal.componentInstance.modalHeader = 'Payment order';
    activeModal.componentInstance.bankName = 'JSC TBC BANK';
    activeModal.componentInstance.address = '7 Kote Marjanishvili St, Delaware';
    activeModal.componentInstance.baneficiary = 'Boltt Sports Technologies LLC.';
    activeModal.componentInstance.swift = 'TBCBGE22';
    activeModal.componentInstance.iBan = 'GE42TB7180436120100005';
    activeModal.componentInstance.rate = 0.001;
  }

  openOrderBank(): void {
    const activeModal = this.modalService.open(ModalComponent, { size: 'lg', container: 'nb-layout' });

    activeModal.componentInstance.paymentType = 2;
    activeModal.componentInstance.modalHeader = 'Payment order';
    activeModal.componentInstance.bankName = 'JSC TBC BANK';
    activeModal.componentInstance.address = '7 Kote Marjanishvili St, Delaware';
    activeModal.componentInstance.baneficiary = 'Boltt Sports Technologies LLC.';
    activeModal.componentInstance.swift = 'TBCBGE22';
    activeModal.componentInstance.iBan = 'GE42TB7180436120100005';
    activeModal.componentInstance.rate = 0.001;
  }

  landingPopup(): void {
    const activeModal = this.modalService.open(LandingPopupComponent, { size: 'lg', container: 'nb-layout' });
  }
}
