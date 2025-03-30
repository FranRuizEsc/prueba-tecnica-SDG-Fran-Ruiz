import { Component, EventEmitter, input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IPopulation } from '../../../core/model/continent-population.interface';

@Component({
  selector: 'population-filter',
  imports: [FormsModule],
  templateUrl: './population-filter.component.html',
  styleUrl: './population-filter.component.scss',
})
export class PopulationFilterComponent {
  @Output() filteredData = new EventEmitter<IPopulation[]>();

  countriesPopulationData = input<IPopulation[]>([]);

  protected filteredCountries: IPopulation[] = [];
  protected minPopulation: number | null = null;
  protected maxPopulation: number | null = null;
  protected errorValidationMessage =
    'The minimum cannot be greater than or equal to the maximum.';

  protected filterByPopulation() {
    if (this.minPopulation === null && this.maxPopulation === null) return;

    this.filteredCountries = this.countriesPopulationData().filter(
      (country) => {
        const population = country.value;
        const minValid =
          this.minPopulation === null || population >= this.minPopulation;
        const maxValid =
          this.maxPopulation === null || population <= this.maxPopulation;
        return minValid && maxValid;
      }
    );

    this.filteredData.emit(this.filteredCountries);
  }

  protected resetFilters() {
    this.minPopulation = null;
    this.maxPopulation = null;
    this.filteredData.emit([...this.countriesPopulationData()]);
  }

  protected isNotValidRange(): boolean {
    return (
      this.minPopulation !== null &&
      this.maxPopulation !== null &&
      this.minPopulation >= this.maxPopulation
    );
  }

  protected shouldDisabledFilterButton(): boolean {
    if (this.minPopulation !== null && this.maxPopulation !== null) {
      return this.minPopulation >= this.maxPopulation;
    }
    return this.shouldDisabledResetFilterButton();
  }

  protected shouldDisabledResetFilterButton(): boolean {
    return this.minPopulation === null && this.maxPopulation === null;
  }
}
