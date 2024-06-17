import {Component, Input} from '@angular/core';
import {BaseWidgetDirective} from "../../../../../app-utils/base-widget/base-widget.directive";
import * as Highcharts from "highcharts"

@Component({
  selector: 'app-donut-chart',
  standalone: true,
  imports: [],
  templateUrl: './donut-chart.component.html',
  styleUrl: './donut-chart.component.scss'
})
export class DonutChartComponent  extends BaseWidgetDirective{

  @Input() public widgetId!: number;

  override ngAfterViewInit() {
    super.ngAfterViewInit();
    this.createDonutChart();
  }

  private createDonutChart(){

    // @ts-ignore
    Highcharts.chart(`container-${this.widgetId}`,{
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
      },
      title: {
        text: 'Browser<br>shares<br>January<br>2022',
        align: 'center',
        verticalAlign: 'middle',
        y: 20,
        style: {
          fontSize: '1.1em'
        }
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
          dataLabels: {
            enabled: true,
            distance: -50,
            style: {
              fontWeight: 'bold',
              color: 'white'
            }
          },
          startAngle: 0,
          endAngle: 360,
          center: ['50%', '50%'],
          size: '110%'
        }
      },
      series: [{
        type: 'pie',
        name: 'Browser share',
        innerSize: '70%',
        data: [
          ['Chrome', 73.86],
          ['Edge', 11.97],
          ['Firefox', 5.52],
          ['Safari', 2.98],
          ['Internet Explorer', 1.90],
          ['Other', 3.77]
        ]
      }]
    });
  }

}
