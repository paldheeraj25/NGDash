import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../providers/payment.service';


@Component({
  selector: 'dex',
  templateUrl: './dex.component.html',
  styleUrls: ['./dex.component.scss']
})
export class DexComponent implements OnInit {

  constructor(private paymentService: PaymentService) { }

  public bitcoinAmount: string = '';
  public ethAmount: string = '';
  public litecointAmount: string = '';
  public xrpAmount: string = '';

  ngOnInit() {
  }

  buyViaBitCoin() {
    const data = {
      'asset_id': 'BTC',
      'price': 0.02110000,
      'amount': this.bitcoinAmount,
    };

    return this.paymentService.getDexApi(data).subscribe(result => {
      console.log(result);
    })
  }

  buyViaEthereum() {
    const data = {
      'asset_id': 'ETH',
      'price': 0.02110000,
      'amount': this.ethAmount,
    };

    return this.paymentService.getDexApi(data).subscribe(result => {
      console.log(result);
    })
  }

  buyViaLitecoin() {
    const data = {
      'asset_id': 'LTC',
      'price': 0.02110000,
      'amount': this.litecointAmount,
    };

    return this.paymentService.getDexApi(data).subscribe(result => {
      console.log(result);
    })
  }

  buyViaRipple() {
    const data = {
      'asset_id': 'XRP',
      'price': 0.02110000,
      'amount': this.xrpAmount,
    };

    return this.paymentService.getDexApi(data).subscribe(result => {
      console.log(result);
    })
  }
}
