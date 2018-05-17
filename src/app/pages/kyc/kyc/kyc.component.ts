import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PaymentService } from '../../providers/payment.service';
import { AuthService } from '../../../auth/providers/auth.service';

declare let idensic: any

@Component({
  selector: 'kyc',
  templateUrl: './kyc.component.html',
  styleUrls: ['./kyc.component.scss']
})
export class KycComponent implements OnInit, AfterViewInit {

  iFrameToken: any;
  constructor(private payment: PaymentService,
    private auth: AuthService,
  ) { }

  ngOnInit() {
    const user = this.auth.getUser();
    console.log(user.user_details.user_id_pk);
    const userDetail = { user_id: user.user_details.user_id_pk }
    this.payment.getKycToken(userDetail).subscribe(data => {

      this.iFrameToken = data.data;
      this.loadScript();
    });
  }

  ngAfterViewInit() {

  }

  loadScript() {
    this.loadExternalScript('https://test-api.sumsub.com/idensic/static/idensic.js').then(() => {
      // const user = this.auth.getUser();
      // console.log(user.user_details.user_id_pk);
      // const userDetail = { user_id: user.user_details.user_id_pk }
      // this.payment.getKycToken(userDetail).subscribe(data => {
      console.log(this.iFrameToken);
      idensic.init(
        // selector of an iframe container (see above)
        '#idensic',
        // configuration object (see preparation steps)
        {
          accessToken: this.iFrameToken,
          applicantDataPage: {
            "enabled": true,
            "fields": [
              {
                "name": "firstName",
                "required": true
              },
              {
                "name": "lastName",
                "required": true
              },
              {
                "name": "email",
                "required": false
              }
            ]
          },
          // steps to require:
          // identity proof (passport, id card or driving license) and a selfie
          requiredDocuments: "IDENTITY:PASSPORT,ID_CARD,DRIVERS;SELFIE:SELFIE",
        },
        // function for the ifram callbacks
        function (messageType, payload) {
          // just logging the incoming messages
          console.log('[IDENSIC DEMO] Idensic message:', messageType, payload);
        }
      );
    })
    // });
  }

  private loadExternalScript(url: string) {
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = url;
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);
    });
  }
}
