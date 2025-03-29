import {
  Component,
  ElementRef,
  input,
  OnChanges,
  ViewChild,
} from '@angular/core';
import Highcharts, { Options } from 'highcharts';
import { ChartConfigService } from '../../services/chart-config.service';
import { IPopulation } from '../../../core/model/continent-population.interface';
import { NgClass } from '@angular/common';
import { map, shareReplay, Subscription } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-charts',
  imports: [NgClass],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss',
})
export class ChartsComponent implements OnChanges {
  chartOptions = input<Options | undefined>(undefined);
  chartId = input<string>();
  title = input<string>('');
  subtitle = input<string | undefined>(undefined);
  data = input<IPopulation[]>([]);

  @ViewChild('chartContainer') chartContainer: ElementRef;

  private subscription = new Subscription();
  private internalChartType: 'bar' | 'column' | 'line' | 'area' | 'pie';

  protected isMobile: boolean;

  constructor(
    private readonly breakpointObserver: BreakpointObserver,
    private readonly chartConfigService: ChartConfigService
  ) {
    this.subscription.add(
      this.breakpointObserver
        .observe([Breakpoints.Handset, Breakpoints.TabletPortrait])
        .pipe(
          map((result) => result.matches),
          shareReplay()
        )
        .subscribe((isHandset) => {
          this.isMobile = isHandset;
          this.renderChart();
        })
    );
  }

  ngAfterViewInit() {
    this.renderChart();
  }

  ngOnChanges() {
    if (this.chartContainer) this.renderChart();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private renderChart() {
    console.log(this.isMobile);
    if (!this.data().length || !this.chartContainer) return;

    this.internalChartType = this.isMobile ? 'bar' : 'column';
    const chartConfig = this.chartConfigService.getBarChartConfig(
      this.data(),
      this.title(),
      this.internalChartType,
      this.subtitle()
    );
    Highcharts.chart(this.chartContainer.nativeElement, chartConfig);
  }
}
