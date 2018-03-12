import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { QRCodeComponent } from 'angular2-qrcode';
import { PaymentService } from '../../../providers/payment.service';

@Component({
  selector: 'ngx-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal-component.scss'],
})
export class ModalComponent implements OnInit {

  modalHeader: string;
  address: string;
  name: string;
  method: string;
  currencyPrice: any;
  bolttAmount: number = 0;
  methodAmount: number = 0;
  orderDetail: { method: string, address: string } = { method: '', address: '' };
  constructor(private activeModal: NgbActiveModal, private router: Router, private payment: PaymentService) {
  }

  ngOnInit() {

  }

  computeBoltt(event) {
    const multiplier = this.currencyPrice[this.method] * 2000;
    this.bolttAmount = event * multiplier;
  };

  closeModal() {
    this.activeModal.close();
  }

  placeOrder() {
    console.log(this.address + ' ' + this.method);
    this.orderDetail.method = this.method;
    this.orderDetail.address = this.address;
    // requesting the api for saving and raising the invoice for payment on the order stat.

    this.payment.raiseOrder(this.orderDetail);
    this.activeModal.close();
    this.router.navigate(['/pages/order-stats']);
  }
}
