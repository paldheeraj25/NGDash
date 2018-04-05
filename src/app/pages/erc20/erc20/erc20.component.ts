import { Component, OnInit } from '@angular/core';
import { ContractService } from '../../providers/contract.service';
import { UserUtilityService } from '../../providers/user-utility.service';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import 'style-loader!angular2-toaster/toaster.css';


@Component({
  selector: 'erc20',
  templateUrl: './erc20.component.html',
  styleUrls: ['./erc20.component.scss'],
})
export class Erc20Component implements OnInit {

  public ether: number = 0;

  public transferAdd: string;
  public transferAmount: number = 0;
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

  constructor(private contractService: ContractService,
    private utiliService: UserUtilityService,
    private toasterService: ToasterService,
  ) { }

  ngOnInit() {
    this.isMetaMaskAvailable = this.contractService.checkProvider();
  }

  serviceCall() {
    return this.contractService.totalSupply().then(result => {
      console.log(result);
    });
  }

  getbalance() {
    return this.contractService.balanceOf().then(result => {
      console.log(result);
    });
  }

  buyBolttOnEthereum() {
    return this.contractService.buy(this.ether).then(result => {
      console.log(result);
      this.makeToast();
    }).catch(err => {
      console.log(err);
    })
  }

  moveToWaves() {
    return this.contractService.balanceOf().then(tokenAmount => {
      console.log(tokenAmount);
      return this.contractService.moveToWaves(tokenAmount).then(result => {
        console.log(result);
        tokenAmount = tokenAmount / 100000000;
        const conversionObj = {
          'boltt_token': tokenAmount,
          'ether_address': result[1],
        }
        this.utiliService.etherToWaves(conversionObj).subscribe(conversionResult => {
          console.log('transfer initiated');
          this.makeToast();
        },
          err => {
            console.log('transfer initiation failed');
          });
      });
    });
  }

  tranferTOOtherAdd() {

    return this.contractService.balanceOf().then(result => {
      console.log(result);
      if (result > this.transferAmount) {
        return this.contractService.transfer(this.transferAdd, this.transferAmount).then(result => {
          console.log(result);
          this.makeToast();
        }).catch(err => {
          console.log(err);
        });
      } else {
        this.showToast('error', 'Insufficient funds', 'Make sure you have suffecient funds to carry out transaction.');
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
