import {Component, Input} from '@angular/core';
import {BarChartComponent} from "../chart-types/bar-chart/bar-chart.component";
import {BaseWidgetDirective} from "../../../../app-utils/base-widget/base-widget.directive";
import {ChartType} from "../../../../app-constants/enum/ChartType";
import {CommonModule} from "@angular/common";
import {PieChartComponent} from "../chart-types/pie-chart/pie-chart.component";
import {DonutChartComponent} from "../chart-types/donut-chart/donut-chart.component";

@Component({
  selector: 'app-chart-container',
  standalone: true,
  imports: [CommonModule, BarChartComponent, PieChartComponent, DonutChartComponent],
  templateUrl: './chart-container.component.html',
  styleUrl: './chart-container.component.scss'
})
export class ChartContainerComponent extends BaseWidgetDirective{

  @Input() public chartType: ChartType = ChartType.BAR_CHART;
  @Input() public widgetId: number = 0;
  protected readonly ChartType = ChartType;
}
