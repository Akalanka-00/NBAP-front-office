import {Component} from '@angular/core';
import {ChartContainerComponent} from "../../../../common-widgets/charts/chart-container/chart-container.component";
import {ChartType} from "../../../../../app-constants/enum/ChartType";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-user-statistics',
  standalone: true,
  imports: [CommonModule, ChartContainerComponent],
  templateUrl: './user-statistics.component.html',
  styleUrl: './user-statistics.component.scss'
})
export class UserStatisticsComponent {

  public chartTypeList: ChartType[] = [ChartType.DONUT_CHART, ChartType.PIE_CHART, ChartType.PIE_CHART, ChartType.DONUT_CHART, ChartType.BAR_CHART]
  protected readonly ChartType = ChartType;
}
