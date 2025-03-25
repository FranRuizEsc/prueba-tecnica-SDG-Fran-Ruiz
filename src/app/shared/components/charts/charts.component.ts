import { Component, inject, Input, OnChanges } from '@angular/core';
import Highcharts from 'highcharts';
import { ChartConfigService } from '../../services/chart-config.service';

@Component({
  selector: 'app-charts',
  imports: [],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss',
})
export class ChartsComponent implements OnChanges {
  @Input() chartId: string = 'chart-container';
  @Input() chartType: 'bar' = 'bar';
  @Input() title: string = '';
  @Input() subtitle?: string;
  @Input() data: { name: string; value: number }[] = [];

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
