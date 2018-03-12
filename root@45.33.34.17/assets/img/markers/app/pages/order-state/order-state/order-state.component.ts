import { Component, OnInit } from '@angular/core';
import { OrderStateService } from './../order-state.service';
import { QRCodeComponent } from 'angular2-qrcode';

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
    this.orderStateService.getPaymentOrderHistory().subscribe(response => {
      this.orders = response.data;
    });
  }

}
