import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PaymentService {

  constructor(private http: HttpClient) { }

  raiseOrder(orderDetails: any) {
    console.log('inside payment srevice');
    console.log(orderDetails);
    return true;
  }
}
