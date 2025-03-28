import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfricaComponent } from './africa.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('AfricaComponent', () => {
  let component: AfricaComponent;
  let fixture: ComponentFixture<AfricaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfricaComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(AfricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
