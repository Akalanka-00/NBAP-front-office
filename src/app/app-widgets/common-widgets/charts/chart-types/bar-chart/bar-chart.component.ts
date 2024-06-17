import {Component, Input} from '@angular/core';
import * as Highcharts from "highcharts"
import {BaseWidgetDirective} from "../../../../../app-utils/base-widget/base-widget.directive";
@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss'
})
export class BarChartComponent extends BaseWidgetDirective{

  @Input() public widgetId!: number;

  public override ngAfterViewInit() {
    super.ngAfterViewInit();
    this.createBarChart();
  }

  private createBarChart(){

    // @ts-ignore
    Highcharts.chart(`container-${this.widgetId}`,
      {
        chart: {
          type: 'bar'
        },
        title: {
          text: 'Fruit Consumption'
        },
        xAxis: {
          categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
          title: {
            text: 'Fruit eaten'
          }
        },
        series: [{
          name: 'Jane',
          data: [1, 0, 4]
        }, {
          name: 'John',
          data: [5, 7, 3]
        }],
      });

  }
}
