import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEventosInscritosComponent } from './lista-eventos-inscritos.component';

describe('ListaEventosComponent', () => {
  let component: ListaEventosInscritosComponent;
  let fixture: ComponentFixture<ListaEventosInscritosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEventosInscritosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEventosInscritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
