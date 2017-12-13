import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEventosInscritosUsuarioComponent } from './lista-eventos-inscritos-usuario.component';

describe('ListaEventosUsuarioComponent', () => {
  let component: ListaEventosInscritosUsuarioComponent;
  let fixture: ComponentFixture<ListaEventosInscritosUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEventosInscritosUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEventosInscritosUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
