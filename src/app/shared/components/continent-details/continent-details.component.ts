import { Component, inject, input } from '@angular/core';
import { ChartsComponent } from '../charts/charts.component';
import { Options } from 'highcharts';
import { IPopulation } from '../../../core/model/continent-population.interface';
import { CountriesService } from '../../../core/services/countries.service';
import { PopulationFilterComponent } from '../population-filter/population-filter.component';

@Component({
  selector: 'continent-details',
  imports: [ChartsComponent, PopulationFilterComponent],
  templateUrl: './continent-details.component.html',
  styleUrl: './continent-details.component.scss',
})
export class ContinentDetailsComponent {
  continent = input<string>('');
  titlePopulation = input<string>('');

  private countriesService = inject(CountriesService);

  protected countriesPopulationData: IPopulation[] = [];
  protected chartTypeBar: 'bar' | 'column' | 'line' | 'area' | 'pie' = 'column';
  protected chartId = 'countries-population-chart';
  protected chartOptions: Options;
  protected filteredCountries: IPopulation[] = [];
  protected pageTitle: string;
  protected isLoading = true;

  ngOnInit() {
    this.pageTitle =
      this.continent() === 'all' ? 'Continents' : this.continent();

    switch (this.continent()) {
      case 'North America':
        this.getNorthAmericaPopulation();
        break;
      case 'South America':
        this.getSouthAmericaPopulation();
        break;
      case 'all':
        this.getContinentPopulationData();
        break;
      default:
        this.getPopulationData();
    }
  }

  onFilteredPopulation(event: any[]) {
    this.filteredCountries = event;
  }

  private getContinentPopulationData() {
    this.countriesService.getPopulationByContinent().subscribe((continent) => {
      this.countriesPopulationData = continent.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      this.filteredCountries = [...this.countriesPopulationData];
      this.isLoading = false;
    });
  }

  private getPopulationData() {
    this.countriesService
      .getFilteredCountriesByRegion(this.continent(), ['name', 'population'])
      .subscribe((countries) => {
        this.transformCountriesData(countries);
        this.isLoading = false;
      });
  }

  private getNorthAmericaPopulation() {
    this.countriesService.getNorthAmericanCountries().subscribe((countries) => {
      this.transformCountriesData(countries);
      this.isLoading = false;
    });
  }

  private getSouthAmericaPopulation() {
    this.countriesService.getSouthAmericanCountries().subscribe((countries) => {
      this.transformCountriesData(countries);
      this.isLoading = false;
    });
  }

  private transformCountriesData(countries: any[]) {
    this.countriesPopulationData = countries
      .map((country) => ({
        name: country.name.common,
        value: country.population,
      }))
      .sort((a, b) => a.name.localeCompare(b.name));

    this.filteredCountries = [...this.countriesPopulationData];
  }
}
