import { CountriesService } from './../../../core/services/countries.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfricaComponent } from './africa.component';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

describe('AfricaComponent', () => {
  let component: AfricaComponent;
  let fixture: ComponentFixture<AfricaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfricaComponent],
      providers: [
        MockProvider(CountriesService, {
          getFilteredCountriesByRegion: () => of([{}]),
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AfricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
