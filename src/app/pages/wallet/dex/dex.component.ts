import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../providers/payment.service';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import 'style-loader!angular2-toaster/toaster.css';


@Component({
  selector: 'dex',
  templateUrl: './dex.component.html',
  styleUrls: ['./dex.component.scss']
})
export class DexComponent implements OnInit {

  constructor(private paymentService: PaymentService,
    private toasterService: ToasterService, ) { }

  public bitcoinAmount: string = '';
  public ethAmount: string = '';
  public litecointAmount: string = '';
  public xrpAmount: string = '';


  // toaster config
  config: ToasterConfig;

  position = 'toast-bottom-full-width';
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

  ngOnInit() {
  }

  buyViaBitCoin() {

    this.paymentService.getKycStatus().subscribe(data => {
      console.log(data);
      if (data.data == 'GREEN') {
        const data = {
          'asset_id': 'BTC',
          'price': 0.02110000,
          'amount': this.bitcoinAmount,
        };

        return this.paymentService.getDexApi(data).subscribe(result => {
          console.log(result);
        })
      } else {
        this.makeToast();
      }
    });

  }

  buyViaEthereum() {
    this.paymentService.getKycStatus().subscribe(data => {
      console.log(data);
      if (data.data == 'GREEN') {
        const data = {
          'asset_id': 'ETH',
          'price': 0.02110000,
          'amount': this.ethAmount,
        };

        return this.paymentService.getDexApi(data).subscribe(result => {
          console.log(result);
        })
      } else {
        this.makeToast();
      }
    });

  }

  buyViaLitecoin() {
    this.paymentService.getKycStatus().subscribe(data => {
      console.log(data);
      if (data.data == 'GREEN') {
        const data = {
          'asset_id': 'LTC',
          'price': 0.02110000,
          'amount': this.litecointAmount,
        };

        return this.paymentService.getDexApi(data).subscribe(result => {
          console.log(result);
        })
      } else {
        this.makeToast();
      }
    });

  }

  buyViaRipple() {
    this.paymentService.getKycStatus().subscribe(data => {
      console.log(data);
      if (data.data == 'GREEN') {
        const data = {
          'asset_id': 'XRP',
          'price': 0.02110000,
          'amount': this.xrpAmount,
        };

        return this.paymentService.getDexApi(data).subscribe(result => {
          console.log(result);
        })
      } else {
        this.makeToast();
      }
    });

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
