import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'doughnut-widget',
  template: `
    <div class="chart-container">
      <echart
        [options]="chartOptions"
        (clickOnChart)="onClick($event)">
      </echart>
    </div>
  `,
  styleUrls: ['./doughnut-widget.component.scss']
})
export class DoughnutWidgetComponent implements OnInit, OnChanges {
  chartOptions: any;
  chartData: any;
  canSelect = true;

  @Input() data: any;
  @Input() options: any;
  @Output() select = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    this.canSelect = !this.options || this.options.canSelect;
    this.buildBaseSeries();
    this.updateSeriesWithBorder();
    this.updateDataWithSelected(this.data[0].name);
    this.buildChartOptions();
  }

  private buildBaseSeries() {
    this.chartData = this.data.map(item =>
      Object.assign(
        {},
        {
          name: item.name,
          value: item.value,
          itemStyle: { normal: { color: item.color } }
        }
      )
    );
  }

  private updateSeriesWithBorder() {
    if (this.options) {
      const { borderWidth, borderColor } = this.options;
      this.chartData = this.chartData.map(item => {
        if (borderWidth) {
          item.itemStyle.normal.borderWidth = borderWidth;
        }
        if (borderColor) {
          item.itemStyle.normal.borderColor = borderColor;
        }
        return item;
      });
    }
  }

  private buildChartOptions() {
    // const values = [
    //   { value: 535, name: '荆州' },
    //   { value: 510, name: '兖州' },
    //   { value: 634, name: '益州' },
    //   { value: 735, name: '西凉' }
    // ];

    // this.chartOptions = {
    //   series: [
    //     {
    //       type: 'pie',
    //       radius: ['50%', '75%'],
    //       data: [
    //         {
    //           value: null,
    //           name: values.reduce((a, b) => a + b.value, 0),
    //           label: {
    //             normal: {
    //               position: 'center',
    //               formatter: '{b}',
    //               color: '#000',
    //               fontWeight: 'bold',
    //               fontSize: 28
    //             }
    //           }
    //         },
    //         ...values
    //       ]
    //     }
    //   ]
    // };

    this.chartOptions = {
      series: [
        {
          type: 'pie',
          radius: ['25%', '40%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: true,
              formatter: '{b}\n{c}',
              position: 'outside'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '20',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: true,
              length: 5
            }
          },
          data: [
            {
              name: this.chartData.reduce((a, b) => a + b.value, 0),
              value: null,
              label: {
                normal: {
                  position: 'center',
                  formatter: '{b}',
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: 22
                }
              }
            },
            ...this.chartData
          ]
        }
      ]
    };
  }

  private updateDataWithSelected(name: string) {
    if (this.canSelect) {
      this.chartData = this.chartData.map(item =>
        Object.assign({}, item, { selected: item.name === name })
      );
    }
  }

  onClick(event) {
    if (this.canSelect) {
      // console.log('chart clicked', event);
      this.updateDataWithSelected(event.name);
      this.buildChartOptions();
      this.select.emit(this.data.find(element => element.name === event.name));
    }
  }
}
