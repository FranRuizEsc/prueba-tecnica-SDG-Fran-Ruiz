import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs';
import { IContinentPopulationData } from '../model/contient-population.interface';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private http = inject(HttpClient);

  getAllCountries(): Observable<any[]> {
    return this.http.get<any[]>(environment.apiUrl + 'all');
  }

  getCountriesByRegion(region: string) {
    return this.http.get<any[]>(environment.apiUrl + 'region/' + region);
  }

  getPopulationByContinent(): Observable<IContinentPopulationData> {
    return this.getAllCountries().pipe(
      map((countries) =>
        countries.reduce((acc, country) => {
          country.continents?.forEach((continent: string) => {
            acc[continent] = acc[continent] || 0;
            acc[continent] += country.population;
          });

          return acc;
        }, {} as IContinentPopulationData)
      )
    );
  }
}
