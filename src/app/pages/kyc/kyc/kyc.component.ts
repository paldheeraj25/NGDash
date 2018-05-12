import { Component, OnInit, AfterViewInit } from '@angular/core';
declare let idensic: any

@Component({
  selector: 'kyc',
  templateUrl: './kyc.component.html',
  styleUrls: ['./kyc.component.scss']
})
export class KycComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.loadExternalScript('https://test-api.sumsub.com/idensic/static/idensic.js').then(() => {
      idensic.init(
        // selector of an iframe container (see above)
        '#idensic',
        // configuration object (see preparation steps)
        {
          accessToken: "75f77e93-ee37-4bfa-8ea7-034279b2fcca",
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
    });
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
