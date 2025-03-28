import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuropeComponent } from './europe.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('EuropeComponent', () => {
  let component: EuropeComponent;
  let fixture: ComponentFixture<EuropeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EuropeComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(EuropeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
