import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs';
import {
  IContinentPopulationData,
  IPopulation,
} from '../model/continent-population.interface';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private http = inject(HttpClient);

  getFilteredCountriesInfo(
    fields: string[]
  ): Observable<IContinentPopulationData[]> {
    return this.http.get<IContinentPopulationData[]>(
      environment.apiUrl + 'all',
      {
        params: { fields: fields },
      }
    );
  }

  getFilteredCountriesByRegion(
    region: string,
    fields: string[]
  ): Observable<any[]> {
    return this.http.get<any>(environment.apiUrl + 'region/' + region, {
      params: { fields: fields },
    });
  }

  getPopulationByContinent(): Observable<IPopulation[]> {
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

  getNorthAmericanCountries(): Observable<any[]> {
    return this.getFilteredCountriesByRegion('Americas', [
      'name',
      'subregion',
      'population',
    ]).pipe(
      map((countries) =>
        countries.filter((country) => country.subregion !== 'South America')
      )
    );
  }

  getSouthAmericanCountries(): Observable<any[]> {
    return this.getFilteredCountriesByRegion('Americas', [
      'name',
      'subregion',
      'population',
    ]).pipe(
      map((countries) =>
        countries.filter((country) => country.subregion === 'South America')
      )
    );
  }

  private transformMApToArray(
    continentMap: Map<string, number>
  ): IPopulation[] {
    return Array.from(continentMap, ([name, value]) => ({ name, value })).sort(
      (a, b) => a.name.localeCompare(b.name)
    );
  }
}
