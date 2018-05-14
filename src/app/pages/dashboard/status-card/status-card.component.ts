import { Component, Input, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { PaymentService } from '../../providers/payment.service';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import 'style-loader!angular2-toaster/toaster.css';


@Component({
  selector: 'ngx-status-card',
  styleUrls: ['./status-card.component.scss'],
  templateUrl: './status-card.component.html',
})
export class StatusCardComponent implements OnInit {

  @Input() title: string;
  @Input() address: string;
  @Input() type: string;
  @Input() rate: any;
  @Input() on = true;

  themeName = 'default';
  settings: Array<any>;
  themeSubscription: any;
  heroInfoButton: any;
  // currency names.
  public currencyName = {
    BTC: 'Bitcoin',
    ETH: 'Ethereum',
    BCH: 'BTC Cash',
    LTC: 'Litcoin',
    DASH: 'Dash',
    ETC: 'ETH Classic',
    XMR: 'Monero',
    ZEC: 'ZCash',
    NEO: 'Neo',
    DOGE: 'DOGE',
    XRP: 'RIPPLE',
    STRAT: 'STRAT',
    WAVES: 'Waves',
  };

  public currencyPrice: any;


  // toaster config
  config: ToasterConfig;

  position = 'toast-top-right';
  animationType = 'fade';
  titleWarning = 'KYC Clearance';
  content = `Please submit and clear your kyc before carry out any kind of transaction.`;
  timeout = 5000;
  toastsLimit = 5;
  typeWarning = 'error';

  isNewestOnTop = true;
  isHideOnClick = true;
  isDuplicatesPrevented = false;
  isCloseButton = true;

  types: string[] = ['default', 'info', 'success', 'warning', 'error'];
  animations: string[] = ['fade', 'flyLeft', 'flyRight', 'slideDown', 'slideUp'];
  positions: string[] = ['toast-top-full-width', 'toast-bottom-full-width', 'toast-top-left', 'toast-top-center',
    'toast-top-right', 'toast-bottom-right', 'toast-bottom-center', 'toast-bottom-left', 'toast-center'];

  quotes = [
    { title: null, body: 'We rock at <i>Angular</i>' },
    { title: null, body: 'Titles are not always needed' },
    { title: null, body: 'Toastr rock!' },
    { title: 'What about nice html?', body: '<b>Sure you <em>can!</em></b>' },
  ];

  //


  constructor(private themeService: NbThemeService,
    private modalService: NgbModal,
    private payment: PaymentService,
    private toasterService: ToasterService, ) {
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.themeName = theme.name;
      this.init(theme.variables);
    });
  }

  ngOnInit() {

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

  openOrder(): void {


    this.payment.getKycStatus().subscribe(data => {
      console.log(data);
      if (data.data == 'GREEN') {
        const activeModal = this.modalService.open(ModalComponent, { size: 'lg', container: 'nb-layout' });

        activeModal.componentInstance.modalHeader = 'Payment order';
        activeModal.componentInstance.paymentType = 1;
        activeModal.componentInstance.address = this.address;
        activeModal.componentInstance.method = this.title;
        activeModal.componentInstance.rate = this.rate;
      } else {
        this.makeToast();
      }
    });

  }

  makeToast() {
    this.showToast(this.typeWarning, this.titleWarning, this.content);
  }

  showToast(type: string, title: string, body: string) {
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
