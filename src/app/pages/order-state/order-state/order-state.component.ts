import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'order-state',
  templateUrl: './order-state.component.html',
  styleUrls: ['./order-state.component.scss']
})
export class OrderStateComponent implements OnInit {

  public orders = [];
  constructor() { }

  ngOnInit() {
    this.orders = [
      { method: 'Bitcoin', address: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX', status: 'un confirmed', transactionId: 123223423, confirm: 2 },
      { method: 'Bitcoin', address: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX', status: 'un confirmed', transactionId: 123223423, confirm: 2 },
      { method: 'Bitcoin', address: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX', status: 'un confirmed', transactionId: 123223423, confirm: 2 },
      { method: 'Bitcoin', address: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX', status: 'un confirmed', transactionId: 123223423, confirm: 2 },
    ]
  }

}
