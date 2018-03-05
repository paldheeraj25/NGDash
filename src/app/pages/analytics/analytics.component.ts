import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {

  data: any = {
    labels: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [{
      data: [57, 65, 59, 80, 81, 56, 55, 40],
      label: 'Series A',
    }, {
      data: [58, 28, 48, 40, 19, 86, 27, 90],
      label: 'Series B',
    }],
  };

  constructor() { }

  ngOnInit() {
  }

  onSelect(event) {
    console.log(event);
  }

}
