import {
  Component,
  OnInit,
  OnChanges,
  ViewChild,
  ElementRef,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import * as echarts from 'echarts';

@Component({
  selector: 'echart',
  template: `
    <div #chartholder (window:resize)="onResize($event)"></div>
  `,
  styleUrls: ['./echart.component.scss']
})
export class EchartComponent implements OnInit, OnChanges {
  @ViewChild('chartholder') input: ElementRef;
  @Input() options: any;
  @Output() clickOnChart = new EventEmitter<any>();
  @Output() changedSize = new EventEmitter();

  myChart: any;

  constructor() {}

  ngOnChanges() {
    if (this.myChart) {
      this.setChartOptions();
    }
  }

  ngOnInit() {
    this.myChart = echarts.init(<HTMLDivElement>this.input.nativeElement);
    this.setChartOptions();
    this.setOnClick();
  }

  private setChartOptions() {
    this.myChart.setOption(this.options);
  }

  private setOnClick() {
    this.myChart.on('click', params => this.clickOnChart.emit(params));
  }

  onResize(event: any) {
    if (this.myChart) {
      this.myChart.resize();
      this.changedSize.emit(this.input.nativeElement.offsetWidth);
    }
  }
}
