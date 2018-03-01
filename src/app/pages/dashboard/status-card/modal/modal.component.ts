import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { QRCodeComponent } from 'angular2-qrcode';

@Component({
  selector: 'ngx-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal-component.scss'],
})
export class ModalComponent implements OnInit {

  modalHeader: string;
  address: string;
  constructor(private activeModal: NgbActiveModal, private router: Router) {
  }

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.close();
  }

  placeOrder() {
    this.activeModal.close();
    this.router.navigate(['/pages/order-stats']);
  }
}
