import { Component, OnInit } from '@angular/core';
import { ContractService } from '../../providers/contract.service';

@Component({
  selector: 'erc20',
  templateUrl: './erc20.component.html',
  styleUrls: ['./erc20.component.scss'],
})
export class Erc20Component implements OnInit {

  constructor(private contractService: ContractService) { }

  ngOnInit() {
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

  moveToWaves() {
    return this.contractService.moveToWaves().then(result => {
      console.log(result);
    });
  }
}
