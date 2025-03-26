import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntarcticaComponent } from './antarctica.component';

describe('AntarcticaComponent', () => {
  let component: AntarcticaComponent;
  let fixture: ComponentFixture<AntarcticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AntarcticaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AntarcticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
