import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OceaniaComponent } from './oceania.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('OceaniaComponent', () => {
  let component: OceaniaComponent;
  let fixture: ComponentFixture<OceaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OceaniaComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(OceaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
