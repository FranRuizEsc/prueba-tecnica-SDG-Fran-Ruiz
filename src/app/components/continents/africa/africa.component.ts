import { Component } from '@angular/core';
import { ContinentDetailsComponent } from '../../../shared/components/continent-details/continent-details.component';

@Component({
  selector: 'app-africa',
  imports: [ContinentDetailsComponent],
  templateUrl: './africa.component.html',
  styleUrl: './africa.component.scss',
})
export class AfricaComponent {
  protected titlePopulation = 'Population of African Countries';
  protected continent = 'Africa';
}
