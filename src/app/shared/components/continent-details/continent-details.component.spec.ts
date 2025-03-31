import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentDetailsComponent } from './continent-details.component';
import { of } from 'rxjs';
import { CountriesService } from '../../../core/services/countries.service';

describe('ContinentDetailsComponent', () => {
  let component: ContinentDetailsComponent;
  let fixture: ComponentFixture<ContinentDetailsComponent>;
  let countriesService: CountriesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContinentDetailsComponent],
      providers: [
        {
          provide: CountriesService,
          useValue: {
            getPopulationByContinent: () => of([{}]),
            getFilteredCountriesByRegion: () => of([{}]),
            getAmericanBySubregionCountries: () => of([{}]),
          },
        },
      ],
    }).compileComponents();

    countriesService = TestBed.inject(CountriesService);
    fixture = TestBed.createComponent(ContinentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getContinentsPopulationData() should obtain and sort the population data for the continent.', () => {
    const mockContinentData = [
      { name: 'Europe', value: 500 },
      { name: 'Asia', value: 1000 },
      { name: 'Africa', value: 200 },
    ];

    const sortedContinentData = [
      { name: 'Africa', value: 200 },
      { name: 'Asia', value: 1000 },
      { name: 'Europe', value: 500 },
    ];

    jest
      .spyOn(countriesService, 'getPopulationByContinent')
      .mockReturnValue(of(mockContinentData));

    component['getContinentsPopulationData']();

    expect(component['countriesPopulationData']).toEqual(sortedContinentData);
    expect(component['filteredCountries']).toEqual(sortedContinentData);
    expect(component['isLoading']).toBe(false);
  });

  it('getCountriesPopulationData() should obtain and transform countries population data', () => {
    const spyTransformCountriesData = jest.spyOn(
      component as any,
      'transformCountriesData'
    );
    jest.spyOn(component, 'continent').mockReturnValue('Africa');
    const mockCountries = [
      { name: 'Niger', population: 1000 },
      { name: 'Congo', population: 2000 },
    ];

    jest
      .spyOn(countriesService, 'getFilteredCountriesByRegion')
      .mockReturnValue(of(mockCountries) as any);

    component['getCountriesPopulationData']();

    expect(countriesService.getFilteredCountriesByRegion).toHaveBeenCalledWith(
      'Africa',
      ['name', 'population']
    );
    expect(spyTransformCountriesData).toHaveBeenCalledWith(mockCountries);
  });

  it('getAmericanCountriesPopulation() should obtain and transform countries population data', () => {
    const spyTransformCountriesData = jest.spyOn(
      component as any,
      'transformCountriesData'
    );
    const mockCountries = [
      { name: 'Mexico', population: 1000, subregion: 'South America' },
      { name: 'Canada', population: 2000, subregion: 'North America' },
    ];

    jest
      .spyOn(countriesService, 'getAmericanBySubregionCountries')
      .mockReturnValue(of(mockCountries) as any);

    component['getAmericanCountriesPopulation']('South America');

    expect(
      countriesService.getAmericanBySubregionCountries
    ).toHaveBeenCalledWith('South America');
    expect(spyTransformCountriesData).toHaveBeenCalledWith(mockCountries);
  });
});
