import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonarEventoComponent } from './abonar-evento.component';

describe('AbonarEventoComponent', () => {
  let component: AbonarEventoComponent;
  let fixture: ComponentFixture<AbonarEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbonarEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbonarEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
