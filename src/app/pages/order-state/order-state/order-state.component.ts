import { Component, OnInit } from '@angular/core';
import { OrderStateService } from './../order-state.service';

@Component({
  selector: 'order-state',
  templateUrl: './order-state.component.html',
  styleUrls: ['./order-state.component.scss']
})
export class OrderStateComponent implements OnInit {

  public orders = [];
  constructor(private orderStateService: OrderStateService) { }

  ngOnInit() {
    this.fetchOrders();
  }

  fetchOrders() {
    this.orderStateService.getPaymentOrderHistory().subscribe( response => {
      console.log(JSON.stringify(response.data));
      this.orders = response.data;
      this.orders.push({"address":"3PE2Xyyua6PngYpnhhUGT5jQ3nXY578h9CD","user_id":177,"amount":"0.0100000000","currency":"Bitcoin","fee":"0.0000500000","confirms":5,"amount_in_usd":0,"transaction_id":"BDgk4dRxjUrMaJmm1pTcDANZBJBdQh9cnsCTKsvgPGf","payment_status":"Successful","boltt_coin_value":"0","boltt_coin_transfer_status":"pending"});
      this.orders.push({"address":"3PE2Xyyua6PngYpnhhUGT5jQ3nXY578h9CE","user_id":177,"amount":"0.0100000000","currency":"LiteCoin","fee":"0.0000500000","confirms":5,"amount_in_usd":0,"transaction_id":"BDgk4dRxjUrMaJmm1pTcDANZBJBdQh9cnsCTKsvgPGf","payment_status":"Successful","boltt_coin_value":"0","boltt_coin_transfer_status":"pending"});
      this.orders.push({"address":"3PE2Xyyua6PngYpnhhUGT5jQ3nXY578h9CG","user_id":177,"amount":"0.0100000000","currency":"Ethereum","fee":"0.0000500000","confirms":5,"amount_in_usd":0,"transaction_id":"BDgk4dRxjUrMaJmm1pTcDANZBJBdQh9cnsCTKsvgPGf","payment_status":"Successful","boltt_coin_value":"0","boltt_coin_transfer_status":"pending"});
    });
  }

}
