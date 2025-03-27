import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainPageComponent } from './main-page.component';
import { MockProvider } from 'ng-mocks';
import { CountriesService } from '../../core/services/countries.service';
import { of } from 'rxjs';
import { IPopulation } from '../../core/model/continent-population.interface';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPageComponent],
      providers: [
        MockProvider(CountriesService, {
          getPopulationByContinent: () =>
            of([
              { name: 'Country1', value: 1000000 },
              { name: 'Country2', value: 2000000 },
            ] as IPopulation[]),
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
