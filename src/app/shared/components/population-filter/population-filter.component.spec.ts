import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulationFilterComponent } from './population-filter.component';

describe('PopulationFilterComponent', () => {
  let component: PopulationFilterComponent;
  let fixture: ComponentFixture<PopulationFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopulationFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopulationFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
