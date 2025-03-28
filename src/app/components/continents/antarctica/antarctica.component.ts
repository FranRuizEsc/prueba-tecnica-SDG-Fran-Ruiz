import { Component } from '@angular/core';
import { ContinentDetailsComponent } from '../../../shared/components/continent-details/continent-details.component';

@Component({
  selector: 'app-antarctica',
  imports: [ContinentDetailsComponent],
  templateUrl: './antarctica.component.html',
  styleUrl: './antarctica.component.scss',
})
export class AntarcticaComponent {
  protected titlePopulation = 'Population of Antarctic countries';
  protected continent = 'Antarctic';
}
