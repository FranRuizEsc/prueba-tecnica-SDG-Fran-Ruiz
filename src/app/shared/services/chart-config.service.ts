import { Injectable } from '@angular/core';
import * as Highcharts from 'highcharts';

@Injectable({
  providedIn: 'root',
})
export class ChartConfigService {
  getBarChartConfig(
    data: { name: string; value: number }[],
    title: string,
    subtitle?: string
  ): Highcharts.Options {
    return {
      chart: {
        type: 'bar',
        backgroundColor: '#f8f9fa',
        spacingTop: 10,
      },
      title: {
        text: title,
        style: { fontSize: '20px', fontWeight: 'bold', padding: '20px' },
      },
      subtitle: {
        text: subtitle || '',
        style: { fontSize: '12px', color: '#666' },
      },
      legend: {
        enabled: false,
      },
      xAxis: { type: 'category' },
      yAxis: { title: { text: 'Values' } },
      tooltip: { pointFormat: '<b>{point.y:,0f}</b>' },
      plotOptions: {
        bar: {
          colorByPoint: true,
          colors: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#4BC0C0',
            '#9966FF',
            '#FF9F40',
            '#8AC24A',
          ],
        },
      },
      accessibility: {
        enabled: false,
      },
      series: [
        {
          type: 'bar',
          name: 'Values',
          data: data.map((item) => ({ name: item.name, y: item.value })),
        },
      ],
      credits: { enabled: false },
    };
  }
}
