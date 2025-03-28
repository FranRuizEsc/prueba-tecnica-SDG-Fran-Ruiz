import { Component } from '@angular/core';
import { ContinentDetailsComponent } from '../../../shared/components/continent-details/continent-details.component';

@Component({
  selector: 'app-north-america',
  imports: [ContinentDetailsComponent],
  templateUrl: './north-america.component.html',
  styleUrl: './north-america.component.scss',
})
export class NorthAmericaComponent {
  protected titlePopulation = 'Population of North American Countries';
  protected continent = 'North America';
}
