import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntarcticaComponent } from './antarctica.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('AntarcticaComponent', () => {
  let component: AntarcticaComponent;
  let fixture: ComponentFixture<AntarcticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AntarcticaComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(AntarcticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
