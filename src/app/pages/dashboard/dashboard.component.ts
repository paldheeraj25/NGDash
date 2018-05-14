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
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import 'style-loader!angular2-toaster/toaster.css';


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
  template = '<img class="custom-spinner-template" src="http://pa1.narvii.com/5722/2c617cd9674417d272084884b61e4bb7dd5f0b15_hq.gif"/>';

  // toaster config
  config: ToasterConfig;

  position = 'toast-top-right';
  animationType = 'fade';
  title = 'KYC Clearance';
  content = `Please submit and clear your kyc before carry out any kind of transaction.`;
  timeout = 5000;
  toastsLimit = 5;
  type = 'error';

  isNewestOnTop = true;
  isHideOnClick = true;
  isDuplicatesPrevented = false;
  isCloseButton = true;

  //
  constructor(private themeService: NbThemeService,
    private utilityService: UserUtilityService,
    private userService: UserService,
    private payment: PaymentService,
    private modalService: NgbModal,
    private spinnerService: Ng4LoadingSpinnerService,
    private toasterService: ToasterService, ) {
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

    this.payment.getKycStatus().subscribe(data => {
      console.log(data);
      if (data.data == 'GREEN') {
        const activeModal = this.modalService.open(ModalComponent, { size: 'lg', container: 'nb-layout' });

        activeModal.componentInstance.paymentType = 3;
        activeModal.componentInstance.modalHeader = 'Payment order';
        activeModal.componentInstance.bankName = 'JSC TBC BANK';
        activeModal.componentInstance.address = '7 Kote Marjanishvili St, Delaware';
        activeModal.componentInstance.baneficiary = 'Boltt Sports Technologies LLC.';
        activeModal.componentInstance.swift = 'TBCBGE22';
        activeModal.componentInstance.iBan = 'GE42TB7180436120100005';
        activeModal.componentInstance.rate = 0.001;
      } else {
        this.makeToast();
      }
    });
  }

  openBolltDex(): void {
    this.payment.getKycStatus().subscribe(data => {
      console.log(data);
      if (data.data == 'GREEN') {
        const activeModal = this.modalService.open(ModalComponent, { size: 'lg', container: 'nb-layout' });

        activeModal.componentInstance.paymentType = 4;
        activeModal.componentInstance.modalHeader = 'Go to Boltt Dex';
        activeModal.componentInstance.rate = 0.001;
      } else {
        this.makeToast();
      }
    });

  }

  openOrderBank(): void {

    this.payment.getKycStatus().subscribe(data => {
      console.log(data);
      if (data.data == 'GREEN') {
        const activeModal = this.modalService.open(ModalComponent, { size: 'lg', container: 'nb-layout' });

        activeModal.componentInstance.paymentType = 2;
        activeModal.componentInstance.modalHeader = 'Payment order';
        activeModal.componentInstance.bankName = 'JSC TBC BANK';
        activeModal.componentInstance.address = '7 Kote Marjanishvili St, Delaware';
        activeModal.componentInstance.baneficiary = 'Boltt Sports Technologies LLC.';
        activeModal.componentInstance.swift = 'TBCBGE22';
        activeModal.componentInstance.iBan = 'GE42TB7180436120100005';
        activeModal.componentInstance.rate = 0.001;
      } else {
        this.makeToast();
      }
    });

  }

  landingPopup(): void {
    const activeModal = this.modalService.open(LandingPopupComponent, { size: 'lg', container: 'nb-layout' });
  }

  makeToast() {
    this.showToast(this.type, this.title, this.content);
  }

  private showToast(type: string, title: string, body: string) {
    this.config = new ToasterConfig({
      positionClass: this.position,
      timeout: this.timeout,
      newestOnTop: this.isNewestOnTop,
      tapToDismiss: this.isHideOnClick,
      preventDuplicates: this.isDuplicatesPrevented,
      animation: this.animationType,
      limit: this.toastsLimit,
    });
    const toast: Toast = {
      type: type,
      title: title,
      body: body,
      timeout: this.timeout,
      showCloseButton: this.isCloseButton,
      bodyOutputType: BodyOutputType.TrustedHtml,
    };
    this.toasterService.popAsync(toast);
  }

  clearToasts() {
    this.toasterService.clear();
  }

}
