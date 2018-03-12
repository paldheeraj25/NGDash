import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserUtilityService } from './../providers/user-utility.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class OrderStateService {

  orderHistoryUrl = environment.apiUrl + "getPaymentOrderHistory";
  constructor(private userUtilityService: UserUtilityService) { }

  getPaymentOrderHistory(): Observable<any> {
    return this.userUtilityService.apiGateWay(this.orderHistoryUrl, 'get');
  }

}
