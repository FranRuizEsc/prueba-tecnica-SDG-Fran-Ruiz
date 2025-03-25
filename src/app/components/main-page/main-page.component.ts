import { ChartsComponent } from './../../shared/components/charts/charts.component';
import { Component, inject, OnInit } from '@angular/core';
import { CountriesService } from '../../core/services/countries.service';
import { IContinentPopulation } from '../../core/model/contient-population.interface';

@Component({
  selector: 'main-page',
  imports: [ChartsComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent implements OnInit {
  private countriesService = inject(CountriesService);

  protected continentPopulationData: IContinentPopulation[] = [];
  protected title = 'Continents Population';
  protected chartTypeBar = 'bar';
  protected chartId = 'continent-population-chart';

  ngOnInit() {
    this.getContinentPopulationData();
  }

  private getContinentPopulationData() {
    this.countriesService
      .getPopulationByContinent()
      .subscribe((continentPopulation) => {
        this.continentPopulationData = Object.entries(continentPopulation)
          .map(([continent, population]) => ({
            name: continent,
            value: population,
          }))
          .sort((a, b) => a.name.localeCompare(b.name));
      });
  }
}
