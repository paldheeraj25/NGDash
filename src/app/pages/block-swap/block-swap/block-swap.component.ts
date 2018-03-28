import { Component, OnInit } from '@angular/core';
import { ContractService } from '../../providers/contract.service';
import { UserUtilityService } from '../../providers/user-utility.service';

@Component({
  selector: 'block-swap',
  templateUrl: './block-swap.component.html',
  styleUrls: ['./block-swap.component.scss'],
})
export class BlockSwapComponent implements OnInit {

  public wavesAdd: string;
  public wavesAmount: number;
  public ethAdd: string;
  public ethAmount: number;
  public isMetaMaskAvailable: boolean;

  constructor(private contractService: ContractService, private utiliService: UserUtilityService) {

  }

  ngOnInit() {
    this.isMetaMaskAvailable = this.contractService.checkProvider();
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
  }
}
