import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { OverallHospitalService } from './overall-hospital.service';

@Component({
  selector: 'overall-hospital',
  template: `
    <div class="widgets">
      <doughnut-widget class="no-drill"
        [data]="data"
        (select)="onSelectOverall($event)">
      </doughnut-widget>
      <div class="drill">
        <doughnut-widget class="drill--top"
          [data]="overallSelected.byCmg"
          (select)="onSelectByCmg($event)">
        </doughnut-widget>
        <doughnut-widget class="drill--bottom"
          [data]="byCmgSelected.byUnit"
          [options]="byUnitOptions">
        </doughnut-widget>
      </div>
    </div>
  `,
  styleUrls: ['./overall-hospital.component.scss']
})
export class OverallHospitalComponent implements OnInit {
  data: any;

  overallSelected: any;
  byCmgSelected: any;

  byUnitOptions: any = {
    borderColor: '#173347',
    borderWidth: 2,
    canSelect: false
  }

  subscription: Subscription;

  constructor(private ohService: OverallHospitalService) {}

  ngOnInit() {
    this.ohService.data$
      .do(data => (this.overallSelected = data[0]))
      .do(data => this.onSelectOverall(this.overallSelected))
      .subscribe(data => (this.data = data));
  }

  onSelectOverall(event: any) {
    this.overallSelected = event;
    this.onSelectByCmg(this.overallSelected.byCmg[0]);
  }

  onSelectByCmg(event: any) {
    this.byCmgSelected = event;
  }
}
