import { Component, inject, OnInit } from '@angular/core';
import { CountriesService } from '../../core/services/countries.service';
import { map } from 'rxjs/internal/operators/map';
import { Observable } from 'rxjs';


interface ContinentPopulation {
  [continent: string]: number;
}

@Component({
  selector: 'main-page',
  imports: [],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent implements OnInit {

  private countriesService = inject(CountriesService);

  protected continentPopulation: any[] = []


  ngOnInit() {
    this.countriesService.getPopulationByContinent().subscribe(continentPopulation => {
      console.log(continentPopulation)
    }) 
  }
}
