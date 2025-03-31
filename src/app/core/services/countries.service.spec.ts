import { TestBed } from '@angular/core/testing';
import { CountriesService } from './countries.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('CountriesService', () => {
  let service: CountriesService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(CountriesService);
    httpTestingController = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getFilteredCountriesInfo() should return the correct request', () => {
    service.getFilteredCountriesInfo(['region']).subscribe();

    const expectUrl = 'https://restcountries.com/v3.1/all?fields=region';
    const req = httpTestingController.expectOne(expectUrl);

    expect(req.request.method).toEqual('GET');
  });

  it('getFilteredCountriesByRegion() should return the correct request', () => {
    service.getFilteredCountriesByRegion('europe', ['region']).subscribe();

    const expectUrl =
      'https://restcountries.com/v3.1/region/europe?fields=region';
    const req = httpTestingController.expectOne(expectUrl);

    expect(req.request.method).toEqual('GET');
  });

  it('getPopulationByContinent() should calculate population by continent correctly', (done) => {
    const mockCountries = [
      { continents: ['Asia'], population: 1000 },
      { continents: ['Europe', 'Asia'], population: 500 },
      { continents: ['Europe'], population: 200 },
    ];

    const expectedResult = [
      { name: 'Asia', value: 1500 },
      { name: 'Europe', value: 700 },
    ];

    jest
      .spyOn(service, 'getFilteredCountriesInfo')
      .mockReturnValue(of(mockCountries));

    service.getPopulationByContinent().subscribe((result) => {
      expect(result).toEqual(expectedResult);
      done();
    });
  });

  describe('getAmericanBySubregionCountries', () => {
    const mockCountries = [
      { name: 'Argentina', subregion: 'South America', population: 123331 },
      { name: 'Canada', subregion: 'North America', population: 877634 },
      { name: 'Brazil', subregion: 'South America', population: 9087239847 },
      {
        name: 'Mexico',
        subregion: 'Central America',
        population: 777299823723,
      },
    ];
    it('should filter countries by South America subregion', (done) => {
      const expectedResult = [
        { name: 'Argentina', subregion: 'South America', population: 123331 },
        { name: 'Brazil', subregion: 'South America', population: 9087239847 },
      ];

      jest
        .spyOn(service, 'getFilteredCountriesByRegion')
        .mockReturnValue(of(mockCountries) as any);

      service
        .getAmericanBySubregionCountries('South America')
        .subscribe((result) => {
          expect(result).toEqual(expectedResult);
          done();
        });
    });

    it('should filter countries by non-South America subregions', (done) => {
      const expectedResult = [
        { name: 'Canada', subregion: 'North America', population: 877634 },
        {
          name: 'Mexico',
          subregion: 'Central America',
          population: 777299823723,
        },
      ];

      jest
        .spyOn(service, 'getFilteredCountriesByRegion')
        .mockReturnValue(of(mockCountries) as any);

      service.getAmericanBySubregionCountries('Other').subscribe((result) => {
        expect(result).toEqual(expectedResult);
        done();
      });
    });
  });

  it('transformMapToArray() should sort the array alphabetically by continent name', () => {
    const continentMap = new Map<string, number>([
      ['Zambia', 100],
      ['Argentina', 200],
      ['Brazil', 300],
    ]);

    const expectedResult = [
      { name: 'Argentina', value: 200 },
      { name: 'Brazil', value: 300 },
      { name: 'Zambia', value: 100 },
    ];

    const result = service['transformMapToArray'](continentMap);

    expect(result).toEqual(expectedResult);
  });
});
