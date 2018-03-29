import { Component, OnInit } from '@angular/core';
import { ContractService } from '../../providers/contract.service';
import { UserUtilityService } from '../../providers/user-utility.service';
import { AuthService } from '../../../auth/providers/auth.service';
import { PaymentService } from '../../providers/payment.service';
import { find } from 'lodash';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';

import 'style-loader!angular2-toaster/toaster.css';


@Component({
  selector: 'block-swap',
  templateUrl: './block-swap.component.html',
  styleUrls: ['./block-swap.component.scss'],
})
export class BlockSwapComponent implements OnInit {

  public wavesAdd: string;
  public wavesAmount: number = 0;
  public ethAdd: string;
  public ethAmount: number = 0;
  public isMetaMaskAvailable: boolean;

  // toaster config
  config: ToasterConfig;

  position = 'toast-bottom-full-width';
  animationType = 'fade';
  title = 'Transaction initiated';
  content = `Your transaction is initiated it might take upto several block confirmation to initiate the transaction`;
  timeout = 5000;
  toastsLimit = 5;
  type = 'success';

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

  constructor(
    private contractService: ContractService,
    private utiliService: UserUtilityService,
    private user: AuthService,
    private payment: PaymentService,
    private toasterService: ToasterService,
  ) {

  }

  ngOnInit() {
    this.isMetaMaskAvailable = this.contractService.checkProvider();
    this.getWalletInfo();
  }

  getWalletInfo() {
    const user = this.user.getUser();
    this.payment.getUserWaveAsset({ user_id: user.user_details.user_id_pk }).subscribe(response => {
      this.wavesAdd = response.user_wallet_data.address;
    });
  }

  moveToWaves() {
    console.log(this.wavesAdd + ' ' + this.wavesAmount);
    return this.contractService.balanceOf().then(tokenAmount => {
      console.log(this.wavesAmount);
      return this.contractService.moveToWaves(this.wavesAmount).then(result => {
        console.log(result);
        const conversionObj = {
          'boltt_token': this.wavesAmount,
          'ether_address': result[1],
          'wave_address': this.wavesAdd,
        }
        this.utiliService.etherToWaves(conversionObj).subscribe(conversionResult => {
          console.log('transfer initiated');
          this.makeToast();
        },
          err => {
            console.log('transfer initiation failed');
          });
      }).catch(err => {
        console.log(err);
      });
    });
  }

  moveToEthereum() {
    console.log(this.ethAdd + ' ' + this.ethAmount);
    this.makeToast();
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
