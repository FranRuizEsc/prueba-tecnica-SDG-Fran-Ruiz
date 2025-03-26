import { Component, inject, OnInit } from '@angular/core';
import { CountriesService } from '../../../core/services/countries.service';
import { ChartsComponent } from '../../../shared/components/charts/charts.component';
import { IPopulation } from '../../../core/model/continent-population.interface';
import { Options } from 'highcharts';

@Component({
  selector: 'app-africa',
  imports: [ChartsComponent],
  templateUrl: './africa.component.html',
  styleUrl: './africa.component.scss',
})
export class AfricaComponent implements OnInit {
  private countriesService = inject(CountriesService);

  protected countriesPopulationData: IPopulation[] = [];
  protected title = 'Population of African Countries';
  protected chartTypeBar = 'column';
  protected chartId = 'countries-population-chart';
  protected chartOptions: Options;

  ngOnInit() {
    this.getPopulationData();
  }

  private getPopulationData() {
    this.countriesService
      .getFilteredCountriesByRegion('Africa', ['name', 'population'])
      .subscribe((data) => {
        this.countriesPopulationData = data
          .map((country) => ({
            name: country.name.common,
            value: country.population,
          }))
          .sort((a, b) => a.name.localeCompare(b.name));
      });
  }
}
