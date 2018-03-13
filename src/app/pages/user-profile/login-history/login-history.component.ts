import { Component, OnInit } from '@angular/core';
import { UserUtilityService } from '../../providers/user-utility.service';
import { LocalDataSource } from 'ng2-smart-table';


@Component({
  selector: 'login-history',
  templateUrl: './login-history.component.html',
  styleUrls: ['./login-history.component.scss'],
})
export class LoginHistoryComponent implements OnInit {

  source: LocalDataSource = new LocalDataSource();

  constructor(private userUtility: UserUtilityService) { }

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    columns: {
      user_ip: {
        title: 'user_ip',
        type: 'string',
      },
      user_agent: {
        title: 'user_agent',
        type: 'string',
      },
      login_time: {
        title: 'login_time',
        type: 'string',
      },
    },
  };

  ngOnInit() {
    this.getUserLoginData();
  }

  getUserLoginData() {
    this.userUtility.getLoginHistory().subscribe(response => {
      console.log(response.data);
      this.source.load(response.data);
    });
  }
}
