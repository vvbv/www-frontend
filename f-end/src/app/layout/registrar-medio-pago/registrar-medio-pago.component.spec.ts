import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarMedioPagoComponent } from './registrar-medio-pago.component';

describe('ListaEventosUsuarioComponent', () => {
  let component: RegistrarMedioPagoComponent;
  let fixture: ComponentFixture<RegistrarMedioPagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarMedioPagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarMedioPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
