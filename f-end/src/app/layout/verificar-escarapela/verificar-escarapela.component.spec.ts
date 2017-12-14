import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarEscarapelaComponent } from './verificar-escarapela.component';

describe('VerificarEscarapelaComponent', () => {
  let component: VerificarEscarapelaComponent;
  let fixture: ComponentFixture<VerificarEscarapelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificarEscarapelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificarEscarapelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
