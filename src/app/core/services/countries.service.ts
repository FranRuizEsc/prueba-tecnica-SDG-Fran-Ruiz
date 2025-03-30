import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs';
import {
  IContinentPopulationData,
  IPopulation,
} from '../model/continent-population.interface';
import { ICountryByRegionInfo } from '../model/country.interface';

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
  ): Observable<ICountryByRegionInfo[]> {
    return this.http.get<ICountryByRegionInfo[]>(
      environment.apiUrl + 'region/' + region,
      {
        params: { fields: fields },
      }
    );
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

        return this.transformMapToArray(continentMap);
      })
    );
  }

  getNorthAmericanCountries(): Observable<ICountryByRegionInfo[]> {
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

  getSouthAmericanCountries(): Observable<ICountryByRegionInfo[]> {
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

  private transformMapToArray(
    continentMap: Map<string, number>
  ): IPopulation[] {
    return Array.from(continentMap, ([name, value]) => ({ name, value })).sort(
      (a, b) => a.name.localeCompare(b.name)
    );
  }
}
