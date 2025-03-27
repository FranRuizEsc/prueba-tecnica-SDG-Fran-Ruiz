import { Component, inject, OnInit } from '@angular/core';
import { CountriesService } from '../../../core/services/countries.service';
import { ChartsComponent } from '../../../shared/components/charts/charts.component';
import { IPopulation } from '../../../core/model/continent-population.interface';
import { Options } from 'highcharts';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-africa',
  imports: [ChartsComponent, FormsModule],
  templateUrl: './africa.component.html',
  styleUrl: './africa.component.scss',
})
export class AfricaComponent implements OnInit {
  private countriesService = inject(CountriesService);

  protected countriesPopulationData: IPopulation[] = [];
  protected title = 'Population of African Countries';
  protected chartTypeBar: 'bar' | 'column' | 'line' | 'area' | 'pie' = 'column';
  protected chartId = 'countries-population-chart';
  protected chartOptions: Options;

  protected filteredCountries: IPopulation[] = [];
  protected minPopulation: number | null = null;
  protected maxPopulation: number | null = null;

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

        this.filteredCountries = [...this.countriesPopulationData];
      });
  }

  protected filterByPopulation() {
    if (this.minPopulation === null && this.maxPopulation === null) {
      console.log('No hay filtros');
      return;
    }

    this.filteredCountries = this.countriesPopulationData.filter((country) => {
      const population = country.value;
      const minValid =
        this.minPopulation === null || population >= this.minPopulation;
      const maxValid =
        this.maxPopulation === null || population <= this.maxPopulation;
      return minValid && maxValid;
    });
  }

  protected resetFilters() {
    this.minPopulation = null;
    this.maxPopulation = null;
    this.filteredCountries = [...this.countriesPopulationData];
  }
}
