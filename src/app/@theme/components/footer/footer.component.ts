import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by"></span>
    <div class="socials">
      <a href="https://t.me/BolttCoin" target="_blank" class="fa fa-telegram"></a>
      <a href="https://www.facebook.com/bolttsports/" target="_blank" class="ion ion-social-facebook"></a>
      <a href="https://twitter.com/bolttsports" target="_blank" class="ion ion-social-twitter"></a>
      <a href="https://www.linkedin.com/company/boltt-sports-technologies-pvt-ltd/" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
