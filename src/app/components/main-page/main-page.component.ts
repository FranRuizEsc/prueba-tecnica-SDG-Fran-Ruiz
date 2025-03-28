import { ContinentDetailsComponent } from '../../shared/components/continent-details/continent-details.component';
import { Component } from '@angular/core';

@Component({
  selector: 'main-page',
  imports: [ContinentDetailsComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {
  protected titlePopulation = 'Population by Continents';
  protected continent = 'all';
}
