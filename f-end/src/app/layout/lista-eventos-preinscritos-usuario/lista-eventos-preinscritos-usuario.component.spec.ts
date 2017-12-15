import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEventosPreinscritosUsuarioComponent } from './lista-eventos-preinscritos-usuario.component';

describe('ListaEventosUsuarioComponent', () => {
  let component: ListaEventosPreinscritosUsuarioComponent;
  let fixture: ComponentFixture<ListaEventosPreinscritosUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEventosPreinscritosUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEventosPreinscritosUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
