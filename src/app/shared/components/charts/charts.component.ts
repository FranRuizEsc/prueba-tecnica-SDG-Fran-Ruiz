import { Component, inject, Input, OnChanges } from '@angular/core';
import Highcharts from 'highcharts';
import { ChartConfigService } from '../../services/chart-config.service';
import { IPopulation } from '../../../core/model/continent-population.interface';

@Component({
  selector: 'app-charts',
  imports: [],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss',
})
export class ChartsComponent implements OnChanges {
  @Input() chartId: string;
  @Input() chartType: string;
  @Input() title: string;
  @Input() subtitle?: string;
  @Input() data: IPopulation[];

  private chartConfigService = inject(ChartConfigService);

  ngOnChanges() {
    this.renderChart();
  }

  private renderChart() {
    if (!this.data.length) return;

    const chartConfig = this.chartConfigService.getBarChartConfig(
      this.data,
      this.title,
      this.subtitle
    );
    Highcharts.chart(this.chartId, chartConfig);
  }
}
