import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IPopulation } from '../../../core/model/continent-population.interface';

@Component({
  selector: 'population-filter',
  imports: [FormsModule],
  templateUrl: './population-filter.component.html',
  styleUrl: './population-filter.component.scss',
})
export class PopulationFilterComponent {
  @Input() countriesPopulationData: any[];

  @Output() filteredData = new EventEmitter<any[]>();

  protected filteredCountries: IPopulation[] = [];
  protected minPopulation: number | null = null;
  protected maxPopulation: number | null = null;

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

    this.filteredData.emit(this.filteredCountries);
  }

  protected resetFilters() {
    this.minPopulation = null;
    this.maxPopulation = null;
    this.filteredData.emit([...this.countriesPopulationData]);
  }
}
