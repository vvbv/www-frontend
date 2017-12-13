import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewEventoInscripcionComponent } from './preview-evento.component';

describe('PreviewEventoComponent', () => {
  let component: PreviewEventoInscripcionComponent;
  let fixture: ComponentFixture<PreviewEventoInscripcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewEventoInscripcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewEventoInscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
