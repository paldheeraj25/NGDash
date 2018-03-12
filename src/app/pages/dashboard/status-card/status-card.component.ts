import { Component, Input, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { PaymentService } from '../../providers/payment.service';



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

  constructor(private themeService: NbThemeService,
    private modalService: NgbModal,
    private payment: PaymentService) {
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.themeName = theme.name;
      this.init(theme.variables);
    });
  }

  ngOnInit() {
    console.log(this.rate);
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
    const activeModal = this.modalService.open(ModalComponent, { size: 'lg', container: 'nb-layout' });

    activeModal.componentInstance.modalHeader = 'Payment order';
    activeModal.componentInstance.paymentType = 1;
    activeModal.componentInstance.address = this.address;
    activeModal.componentInstance.method = this.title;
    activeModal.componentInstance.rate = this.rate;
  }
}
