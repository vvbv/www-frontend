import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarEscarapelaComponent } from './generar-escarapela.component';

describe('GenerarEscarapelaComponent', () => {
  let component: GenerarEscarapelaComponent;
  let fixture: ComponentFixture<GenerarEscarapelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerarEscarapelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarEscarapelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
