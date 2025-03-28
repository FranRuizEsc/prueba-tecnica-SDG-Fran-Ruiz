import { Component } from '@angular/core';
import { ContinentDetailsComponent } from '../../../shared/components/continent-details/continent-details.component';

@Component({
  selector: 'app-europe',
  imports: [ContinentDetailsComponent],
  templateUrl: './europe.component.html',
  styleUrl: './europe.component.scss',
})
export class EuropeComponent {
  protected titlePopulation = 'Population of European Countries';
  protected continent = 'Europe';
}
