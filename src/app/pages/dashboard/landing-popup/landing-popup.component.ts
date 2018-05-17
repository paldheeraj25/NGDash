import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'landing-popup',
  templateUrl: './landing-popup.component.html',
  styleUrls: ['./landing-popup.component.scss']
})
export class LandingPopupComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.close();
    window.localStorage.setItem('initialDisclaimer', 'true');
  }
}
