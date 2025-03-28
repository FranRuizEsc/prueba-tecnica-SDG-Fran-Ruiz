import { Component } from '@angular/core';
import { ContinentDetailsComponent } from '../../../shared/components/continent-details/continent-details.component';

@Component({
  selector: 'app-south-america',
  imports: [ContinentDetailsComponent],
  templateUrl: './south-america.component.html',
  styleUrl: './south-america.component.scss',
})
export class SouthAmericaComponent {
  protected titlePopulation = 'Population of South American Countries';
  protected continent = 'South America';
}
