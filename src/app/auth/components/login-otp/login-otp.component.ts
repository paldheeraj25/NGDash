import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserUtilityService } from '../../../pages/providers/user-utility.service';
import { PaymentService } from '../../../pages/providers/payment.service';
import { AuthService } from '../../providers/auth.service';


@Component({
  selector: 'login-otp',
  templateUrl: './login-otp.component.html',
  styleUrls: ['./login-otp.component.scss']
})
export class LoginOtpComponent implements OnInit {

  userId: any;
  public otpText;
  constructor(
    public activeModal: NgbActiveModal,
    public userService: PaymentService,
    private auth: AuthService,
  ) { }

  ngOnInit() {
  }

  otp() {
    const dataObject = { user_id: this.userId, otp: this.otpText };
    this.userService.verifyOtp(dataObject).subscribe(data => {
      console.log(data)
      this.activeModal.close(data);
    });
  }

  closeModal() {
    this.auth.logout();
    this.activeModal.close();
  }
}
