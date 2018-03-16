import { Component, OnInit } from '@angular/core';
import { UserUtilityService } from '../../providers/user-utility.service';
import { LocalDataSource } from 'ng2-smart-table';


@Component({
  selector: 'live-transaction',
  templateUrl: './live-transaction.component.html',
  styleUrls: ['./live-transaction.component.scss']
})
export class LiveTransactionComponent implements OnInit {
  source: LocalDataSource = new LocalDataSource();

  constructor(private userUtility: UserUtilityService) { }

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    columns: {
      amount_transferred: {
        title: 'amount_transferred',
        type: 'string',
      },
      currency: {
        title: 'currency',
        type: 'string',
      },
      status: {
        title: 'status',
        type: 'string',
      },
      token_issued: {
        title: 'token_issued',
        type: 'string',
      },
      transaction_id: {
        title: 'transaction_id',
        type: 'string',
      },
    },
  };

  ngOnInit() {
    this.getUserLiveTransaction();
  }

  getUserLiveTransaction() {
    this.userUtility.getLiveTransactions().subscribe(response => {
      console.log(response.data);
      this.source.load(response.data);
    });
  }

}
