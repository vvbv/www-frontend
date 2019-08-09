import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEventosUsuarioComponent } from './lista-eventos-usuario.component';

describe('ListaEventosUsuarioComponent', () => {
  let component: ListaEventosUsuarioComponent;
  let fixture: ComponentFixture<ListaEventosUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEventosUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEventosUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
