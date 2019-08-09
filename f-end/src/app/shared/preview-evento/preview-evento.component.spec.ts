import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewEventoComponent } from './preview-evento.component';

describe('PreviewEventoComponent', () => {
  let component: PreviewEventoComponent;
  let fixture: ComponentFixture<PreviewEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
