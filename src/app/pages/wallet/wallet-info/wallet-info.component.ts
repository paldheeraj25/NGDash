import { Component, OnInit } from '@angular/core';
import { NbThemeService, NbColorHelper } from '@nebular/theme';
import { PaymentService } from '../../providers/payment.service';

import { find } from 'lodash';
import { AuthService } from '../../../auth/providers/auth.service';

@Component({
  selector: 'wallet-info',
  templateUrl: './wallet-info.component.html',
  styleUrls: ['./wallet-info.component.scss']
})
export class WalletInfoComponent implements OnInit {

  balance: string = '';
  wallet: string = '';
  seed: string = '';
  constructor(private payment: PaymentService, private user: AuthService) { }

  ngOnInit() {
    this.getWalletInfo();
  }

  getWalletInfo() {
    const user = this.user.getUser();
    this.payment.getUserWaveAsset({ user_id: user.user_details.user_id_pk }).subscribe(response => {
      this.balance = find(response.data, { name: 'KDP' }).balance;
      this.wallet = response.user_wallet_data.address;
      this.seed = response.user_wallet_data.seed;
    });
  }
}
