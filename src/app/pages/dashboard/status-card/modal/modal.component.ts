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
  action: any;
  paymentAuth: any;
  orderDetail: { method: string, address: string, amount: number } = { method: '', address: '', amount: 0 };
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
    this.orderDetail.amount = this.methodAmount;
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
          sandbox: 'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R',
          production: '<insert production client id>'
        },
        commit: true,
        funding: {
          allowed: [paypal.FUNDING.CREDIT],
        },
        style: {
          color: 'gold',
          size: 'small',
        },
        payment: function (data, actions) {
          // Make a call to the REST api to create the payment
          console.log('inside payment');
          console.log(data);
          console.log(actions);
          this.data = data;
          return actions.payment.create({
            payment: {
              transactions: [
                {
                  amount: { total: this.methodAmount, currency: 'USD' },
                },
              ],
            },
          });
        },
        onAuthorize: function (data, actions) {
          console.log('inside payment');
          console.log(data);
          console.log(actions);
          const paymentService = this.paymentService;
          const actionData = this.data;
          return actions.payment.execute().then(function (payment) {
            // TODO
            console.log('paypal response');
            console.log(payment);
            const finalData = { actionData, payment };
            paymentService.getPayPalApi(finalData).subscribe(response => {
              console.log(response);
            });
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
