import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { OverallHospitalService } from './overall-hospital.service';

@Component({
  selector: 'overall-hospital',
  template: `
    <ng-container *ngIf="overallSelected && byCmgSelected; else someWidgets">
      <div class="all-widgets" >
        <doughnut-widget
          class="first"
          [data]="data"
          [selected]="overallSelected"
          (select)="onSelectOverall($event)">
        </doughnut-widget>
        <div class="second" *ngIf="overallSelected">
          <doughnut-widget
            [data]="overallSelected.byCmg"
            [selected]="byCmgSelected"
            (select)="onSelectByCmg($event)">
          </doughnut-widget>
          <doughnut-widget *ngIf="byCmgSelected"
            [data]="byCmgSelected.byUnit"
            [options]="byUnitOptions">
          </doughnut-widget>
        </div>
      </div>
    </ng-container>

    <ng-template #someWidgets>

      <ng-container *ngIf="overallSelected; else oneWidget">
        <div class="two-widgets">
          <doughnut-widget
            class="first"
            [data]="data"
            [selected]="overallSelected"
            (select)="onSelectOverall($event)">
          </doughnut-widget>
          <doughnut-widget
            class="second"
            [data]="overallSelected.byCmg"
            (select)="onSelectByCmg($event)">
          </doughnut-widget>
        </div>
      </ng-container>

      <ng-template #oneWidget>
        <div class="one-widget">
          <doughnut-widget
            [data]="data"
            (select)="onSelectOverall($event)">
          </doughnut-widget>
        </div>
      </ng-template>

    </ng-template>
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
  };

  subscription: Subscription;

  constructor(private ohService: OverallHospitalService) {}

  ngOnInit() {
    this.ohService.data$
      // .do(data => (this.overallSelected = data[0]))
      // .do(data => this.onSelectOverall(this.overallSelected))
      .subscribe(data => (this.data = data));
  }

  onSelectOverall(event: any) {
    this.overallSelected =
      this.overallSelected && this.overallSelected.name === event.name
        ? null
        : event;
    this.byCmgSelected = null;
    // this.onSelectByCmg(this.overallSelected.byCmg[0]);
  }

  onSelectByCmg(event: any) {
    this.byCmgSelected = event;
  }
}
