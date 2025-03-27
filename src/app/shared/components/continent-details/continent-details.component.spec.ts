import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentDetailsComponent } from './continent-details.component';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';
import { CountriesService } from '../../../core/services/countries.service';

describe('ContinentDetailsComponent', () => {
  let component: ContinentDetailsComponent;
  let fixture: ComponentFixture<ContinentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContinentDetailsComponent],
      providers: [
        MockProvider(CountriesService, {
          getFilteredCountriesByRegion: () => of([{}]),
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ContinentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
