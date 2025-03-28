import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthAmericaComponent } from './south-america.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('SouthAmericaComponent', () => {
  let component: SouthAmericaComponent;
  let fixture: ComponentFixture<SouthAmericaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SouthAmericaComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(SouthAmericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
