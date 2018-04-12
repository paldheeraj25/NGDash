import { Component, OnInit } from '@angular/core';
import { UserUtilityService } from '../providers/user-utility.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ether-transactions',
  templateUrl: './ether-transactions.component.html',
  styleUrls: ['./ether-transactions.component.scss']
})
export class EtherTransactionsComponent implements OnInit {
  source: LocalDataSource = new LocalDataSource();

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    columns: {
      ether_address: {
        title: 'ether_address',
        type: 'string',
      },
      boltt_coins: {
        title: 'boltt_coins',
        type: 'string',
      },
      ether_value: {
        title: 'ether_value',
        type: 'string',
      },
    },
  };

  constructor(private userUtility: UserUtilityService) { }

  ngOnInit() {
    this.getUserLiveTransaction();
  }

  getUserLiveTransaction() {
    this.userUtility.getEtherTransaction().subscribe(response => {
      console.log(response.data);
      this.source.load(response.data);
    });
  }
}
