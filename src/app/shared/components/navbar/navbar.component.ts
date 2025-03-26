import { Component, inject } from '@angular/core';
import { CountriesService } from '../../../core/services/countries.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  private countriesService = inject(CountriesService);
  private router = inject(Router);

  protected continents: string[] = [];

  ngOnInit() {
    this.countriesService.getPopulationByContinent().subscribe((data) => {
      data.forEach((element: any) => {
        this.continents.push(element.name);
      });
    });
  }

  protected navigateToMain() {
    this.router.navigate(['/']);
  }
}
