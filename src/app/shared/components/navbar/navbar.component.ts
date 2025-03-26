import { Component, inject } from '@angular/core';
import { CountriesService } from '../../../core/services/countries.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  private countriesService = inject(CountriesService);

  ngOnInit() {
    this.countriesService.getPopulationByContinent().subscribe((data) => {
      console.log(data);
    });
  }
}
