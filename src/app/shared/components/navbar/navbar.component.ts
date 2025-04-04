import { Component, inject } from '@angular/core';
import { CountriesService } from '../../../core/services/countries.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { IPopulation } from '../../../core/model/continent-population.interface';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  private countriesService = inject(CountriesService);
  private router = inject(Router);

  protected continents: string[] = [];

  ngOnInit() {
    this.countriesService
      .getPopulationByContinent()
      .subscribe((data: IPopulation[]) => {
        data.forEach((element: IPopulation) => {
          this.continents.push(element.name);
        });
      });
  }

  protected navigateToMain() {
    this.router.navigate(['/']);
  }
}
