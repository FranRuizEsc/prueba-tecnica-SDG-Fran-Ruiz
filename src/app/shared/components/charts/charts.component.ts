import {
  Component,
  ElementRef,
  inject,
  input,
  OnChanges,
  ViewChild,
} from '@angular/core';
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
  chartOptions = input<Options | undefined>(undefined);
  chartId = input<string>();
  chartType = input<'bar' | 'column' | 'line' | 'area' | 'pie'>('bar');
  title = input<string>('');
  subtitle = input<string | undefined>(undefined);
  data = input<IPopulation[]>([]);

  @ViewChild('chartContainer') chartContainer: ElementRef;

  private chartConfigService = inject(ChartConfigService);

  ngAfterViewInit() {
    this.renderChart();
  }

  ngOnChanges() {
    if (this.chartContainer) this.renderChart();
  }

  private renderChart() {
    if (!this.data().length || !this.chartContainer) return;

    const chartConfig = this.chartConfigService.getBarChartConfig(
      this.data(),
      this.title(),
      this.chartType(),
      this.subtitle()
    );
    Highcharts.chart(this.chartContainer.nativeElement, chartConfig);
  }
}
