import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEventosPreinscritosComponent } from './lista-eventos-preinscritos.component';

describe('ListaEventosComponent', () => {
  let component: ListaEventosPreinscritosComponent;
  let fixture: ComponentFixture<ListaEventosPreinscritosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEventosPreinscritosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEventosPreinscritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
