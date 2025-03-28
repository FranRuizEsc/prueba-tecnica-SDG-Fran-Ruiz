import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsiaComponent } from './asia.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('AsiaComponent', () => {
  let component: AsiaComponent;
  let fixture: ComponentFixture<AsiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsiaComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(AsiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
