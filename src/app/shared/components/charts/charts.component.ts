import { ChartConfigService } from '../../../core/services/chart-config.service';
import { Component, inject, Input } from '@angular/core';
import Highcharts from 'highcharts';

@Component({
  selector: 'app-charts',
  imports: [],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss',
})
export class ChartsComponent {
  @Input() chartId: string = 'chart-container';
  @Input() chartType: 'bar' = 'bar';
  @Input() title: string = '';
  @Input() subtitle?: string;
  @Input() data: { name: string; value: number }[] = [];

  private chartConfigService = inject(ChartConfigService);

  ngAfterViewInit() {
    console.log(this.data)
    this.renderChart();
  }

  private renderChart() {
    if (!this.data.length) return;

    const chartConfig = this.chartConfigService.getBarChartConfig(this.data, this.title, this.subtitle);

    Highcharts.chart(this.chartId, chartConfig);

  }
}
