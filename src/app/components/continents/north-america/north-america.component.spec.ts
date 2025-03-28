import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthAmericaComponent } from './north-america.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('NorthAmericaComponent', () => {
  let component: NorthAmericaComponent;
  let fixture: ComponentFixture<NorthAmericaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NorthAmericaComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(NorthAmericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
