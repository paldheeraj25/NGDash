import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserUtilityService } from './user-utility.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class PaymentService {

  orderHistoryUrl = environment.apiUrl + "getConversionRates";
  constructor(private http: HttpClient, private userUtilityService: UserUtilityService) { }

  raiseOrder(orderDetails: any) {
    console.log('inside payment srevice');
    console.log(orderDetails);
    return true;
  }

  getConversionRate(): Observable<any> {
    return this.userUtilityService.apiGateWay(this.orderHistoryUrl, 'get');
  }
}
