import { Component } from '@angular/core';
import { ContinentDetailsComponent } from '../../../shared/components/continent-details/continent-details.component';

@Component({
  selector: 'app-oceania',
  imports: [ContinentDetailsComponent],
  templateUrl: './oceania.component.html',
  styleUrl: './oceania.component.scss',
})
export class OceaniaComponent {
  protected titlePopulation = 'Population of Oceania Countries';
  protected continent = 'Oceania';
}
