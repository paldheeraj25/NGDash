import { Component, OnInit } from '@angular/core';
import { ContractService } from '../../providers/contract.service';
import { UserUtilityService } from '../../providers/user-utility.service';


@Component({
  selector: 'erc20',
  templateUrl: './erc20.component.html',
  styleUrls: ['./erc20.component.scss'],
})
export class Erc20Component implements OnInit {

  public ether: number;

  public transferAdd: string;
  public transferAmount: number;
  public isMetaMaskAvailable: boolean;

  constructor(private contractService: ContractService, private utiliService: UserUtilityService) { }

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
        },
          err => {
            console.log('transfer initiation failed');
          });
      });
    });
  }

  tranferTOOtherAdd() {
    return this.contractService.transfer(this.transferAdd, this.transferAmount).then(result => {
      console.log(result);
    }).catch(err => {
      console.log(err);
    });
  }
}
