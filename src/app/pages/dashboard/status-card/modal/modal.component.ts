import { Component, Input, OnInit, SimpleChanges, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { QRCodeComponent } from 'angular2-qrcode';
import { PaymentService } from '../../../providers/payment.service';
declare let paypal: any;

@Component({
  selector: 'ngx-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal-component.scss'],
})
export class ModalComponent implements OnInit, AfterViewInit {

  modalHeader: string;
  address: string;
  name: string;
  method: string;
  currencyPrice: any;
  rate: any;
  paymentType: any;
  bolttAmount: number = 0;
  methodAmount: number = 0;
  orderDetail: { method: string, address: string } = { method: '', address: '' };
  constructor(private activeModal: NgbActiveModal, private router: Router, private payment: PaymentService) {
  }

  ngOnInit() {
  }

  computeBoltt(event) {
    const multiplier = this.rate * 2000;
    this.bolttAmount = event * multiplier;
  };

  closeModal() {
    this.activeModal.close();
  }

  placeOrder() {
    this.orderDetail.method = this.method;
    this.orderDetail.address = this.address;
    // requesting the api for saving and raising the invoice for payment on the order stat.

    this.payment.raiseOrder(this.orderDetail);
    this.activeModal.close();
    this.router.navigate(['/pages/order-stats']);
  }

  // paypal
  ngAfterViewInit(): void {
    this.loadExternalScript("https://www.paypalobjects.com/api/checkout.js").then(() => {
      paypal.Button.render({
        env: 'sandbox',
        client: {
          production: 'AR_eFIArAhKJsKijJeSEreW2RI8NPYsAHQdw6QFJgGZQfNHi27O_hUkFruRqZThMJIteaifh6-4EmHQu',
          sandbox: 'AR_eFIArAhKJsKijJeSEreW2RI8NPYsAHQdw6QFJgGZQfNHi27O_hUkFruRqZThMJIteaifh6-4EmHQu',
        },
        commit: true,
        payment: function (data, actions) {
          return actions.payment.create({
            payment: {
              transactions: [
                {
                  amount: { total: '2.00', currency: 'USD' },
                },
              ],
            },
          })
        },
        onAuthorize: function (data, actions) {
          console.log(data);
          return actions.payment.execute().then(function (payment) {
            // TODO
            console.log('paypal response');
            console.log(payment);
          })
        },
      }, '#paypal-button');
    });
  }

  private loadExternalScript(scriptUrl: string) {
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script')
      scriptElement.src = scriptUrl
      scriptElement.onload = resolve
      document.body.appendChild(scriptElement)
    });
  }
}
