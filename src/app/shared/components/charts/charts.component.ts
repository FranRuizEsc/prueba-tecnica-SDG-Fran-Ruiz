import { Component, inject, Input, OnChanges } from '@angular/core';
import Highcharts, { Options } from 'highcharts';
import { ChartConfigService } from '../../services/chart-config.service';
import { IPopulation } from '../../../core/model/continent-population.interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-charts',
  imports: [NgClass],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss',
})
export class ChartsComponent implements OnChanges {
  @Input() chartOptions?: Options;
  @Input() chartId: string;
  @Input() chartType: 'bar' | 'column' | 'line' | 'area' | 'pie';
  @Input() title: string;
  @Input() subtitle?: string;
  @Input() data: IPopulation[];

  private chartConfigService = inject(ChartConfigService);

  ngOnChanges() {
    console.log('chartId: ', this.chartId);
    console.log('chartType: ', this.chartType);
    console.log('title: ', this.title);
    console.log('subtitle: ', this.subtitle);
    console.log('data: ', this.data);

    this.renderChart();
  }

  private renderChart() {
    if (!this.data.length) return;

    const chartConfig = this.chartConfigService.getBarChartConfig(
      this.data,
      this.title,
      this.chartType,
      this.subtitle
    );
    Highcharts.chart(this.chartId, chartConfig);
  }
}
