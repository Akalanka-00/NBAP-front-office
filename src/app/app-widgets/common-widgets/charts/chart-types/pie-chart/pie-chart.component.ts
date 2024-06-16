import {Component, Input} from '@angular/core';
import * as Highcharts from "highcharts"
import {BaseWidgetDirective} from "../../../../../app-utils/base-widget/base-widget.directive";

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss'
})
export class PieChartComponent extends BaseWidgetDirective{

  @Input() public widgetId!: number;

  public override ngAfterViewInit() {
    super.ngAfterViewInit();
    this.createPieChart();
  }

  private createPieChart(){
    // @ts-ignore
    Highcharts.chart(`container-${this.widgetId}`, {
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Departamental Strength of the Company',
        align: 'left'
      },
      subtitle: {
        text: 'Custom animation of pie series',
        align: 'left'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          borderWidth: 2,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b><br>{point.percentage}%',
            distance: 20
          }
        }
      },
      series: [{
        // Disable mouse tracking on load, enable after custom animation
        enableMouseTracking: false,
        animation: {
          duration: 2000
        },
        colorByPoint: true,
        data: [{
          name: 'Customer Support',
          y: 21.3
        }, {
          name: 'Development',
          y: 18.7
        }, {
          name: 'Sales',
          y: 20.2
        }, {
          name: 'Marketing',
          y: 14.2
        }, {
          name: 'Other',
          y: 25.6
        }]
      }]
    });
  }
}


