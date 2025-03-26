import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs';
import { IContinentPopulation } from '../model/contient-population.interface';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private http = inject(HttpClient);

  getFilteredCountriesInfo(fields: string[]) {
    return this.http.get<{ population: number; continents: string[] }[]>(
      environment.apiUrl + 'all',
      {
        params: { fields: fields },
      }
    );
  }

  getPopulationByContinent(): Observable<IContinentPopulation[]> {
    return this.getFilteredCountriesInfo(['population', 'continents']).pipe(
      map((countries) => {
        const continentMap = new Map<string, number>();

        countries.forEach((country) => {
          country.continents?.forEach((continent) => {
            const currentPopulation = continentMap.get(continent) ?? 0;
            continentMap.set(
              continent,
              currentPopulation + (country.population || 0)
            );
          });
        });

        return this.transformMApToArray(continentMap);
      })
    );
  }

  private transformMApToArray(
    continentMap: Map<string, number>
  ): IContinentPopulation[] {
    return Array.from(continentMap, ([name, value]) => ({ name, value })).sort(
      (a, b) => a.name.localeCompare(b.name)
    );
  }
}
