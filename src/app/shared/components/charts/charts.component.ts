import {
  Component,
  ElementRef,
  inject,
  Input,
  OnChanges,
  ViewChild,
} from '@angular/core';
import Highcharts, { Chart, Options } from 'highcharts';
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

  @ViewChild('chartContainer') chartContainer: ElementRef;

  private chartConfigService = inject(ChartConfigService);
  private chart: Chart;

  ngAfterViewInit() {
    this.renderChart();
  }

  ngOnChanges() {
    if (this.chartContainer) this.renderChart();
  }

  private renderChart() {
    if (!this.data?.length || !this.chartContainer) return;

    const chartConfig = this.chartConfigService.getBarChartConfig(
      this.data,
      this.title,
      this.chartType,
      this.subtitle
    );
    Highcharts.chart(this.chartContainer.nativeElement, chartConfig);
  }
}
