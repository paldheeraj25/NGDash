import { Component, OnInit } from '@angular/core';
import { NbThemeService, NbColorHelper } from '@nebular/theme';
import { PaymentService } from '../../providers/payment.service';
import { AuthService } from '../../../auth/providers/auth.service';
import { find } from 'lodash';


@Component({
  selector: 'wallet-info',
  templateUrl: './wallet-info.component.html',
  styleUrls: ['./wallet-info.component.scss']
})
export class WalletInfoComponent implements OnInit {

  bolltTokens: number = 0;
  bolttWallet: string;
  bolttSeed: string;
  constructor(private walletService: PaymentService, private user: AuthService) { }


  ngOnInit() {
    this.getWalletData();
  }

  getWalletData() {
    const storage = window.localStorage.getItem('bolttUser');
    const currentUser = this.user.getUser();
    console.log(currentUser.user_details.user_id_pk);
    this.walletService.getUserWaveAsset({ user_id: currentUser.user_details.user_id_pk }).subscribe(response => {
      this.bolltTokens = find(response.data, { name: 'KDP' }).balance;
      console.log(response)
      this.bolttWallet = response.user_wallet_data.address;
      this.bolttSeed = response.user_wallet_data.seed;
    });
  }
}
