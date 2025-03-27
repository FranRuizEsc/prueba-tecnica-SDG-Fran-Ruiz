import { FormsModule } from '@angular/forms';
import { Component, inject, Input } from '@angular/core';
import { ChartsComponent } from '../charts/charts.component';
import { Options } from 'highcharts';
import { IPopulation } from '../../../core/model/continent-population.interface';
import { CountriesService } from '../../../core/services/countries.service';

@Component({
  selector: 'continent-details',
  imports: [ChartsComponent, FormsModule],
  templateUrl: './continent-details.component.html',
  styleUrl: './continent-details.component.scss',
})
export class ContinentDetailsComponent {
  @Input() titlePopulation: string;
  @Input() continent: string;

  private countriesService = inject(CountriesService);

  protected countriesPopulationData: IPopulation[] = [];
  protected chartTypeBar: 'bar' | 'column' | 'line' | 'area' | 'pie' = 'column';
  protected chartId = 'countries-population-chart';
  protected chartOptions: Options;

  protected filteredCountries: IPopulation[] = [];
  protected minPopulation: number | null = null;
  protected maxPopulation: number | null = null;

  ngOnInit() {
    this.getPopulationData();
    this.countriesService
      .getGroupedRegionsContinentsSubregions()
      .subscribe((data) => {
        console.log(data);
      });
  }

  private getPopulationData() {
    this.countriesService
      .getFilteredCountriesByRegion(this.continent, ['name', 'population'])
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
    if (this.minPopulation === null && this.maxPopulation === null) return;

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
