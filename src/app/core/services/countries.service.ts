import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs';

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

  getPopulationByContinent(): Observable<any[]> {
    const continentMap = new Map<string, number>();
    return this.http
      .get<any[]>(environment.apiUrl + 'all', {
        params: { fields: 'population,continents' },
      })
      .pipe(
        map((countries) => {
          countries.forEach((country) => {
            if (country.continents && country.population) {
              country.continents.forEach((continent: any) => {
                const currentPopulation = continentMap.get(continent) || 0;
                continentMap.set(
                  continent,
                  currentPopulation + country.population
                );
              });
            }
          });
          return Array.from(continentMap.entries())
            .map(([name, value]) => ({
              name,
              value,
            }))
            .sort((a, b) => a.name.localeCompare(b.name));
        })
      );
  }
}
