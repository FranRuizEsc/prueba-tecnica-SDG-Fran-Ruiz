import { Component } from '@angular/core';
import { ContinentDetailsComponent } from '../../../shared/components/continent-details/continent-details.component';

@Component({
  selector: 'app-asia',
  imports: [ContinentDetailsComponent],
  templateUrl: './asia.component.html',
  styleUrl: './asia.component.scss',
})
export class AsiaComponent {
  protected titlePopulation = 'Population of Asian Countries';
  protected continent = 'Asia';
}
