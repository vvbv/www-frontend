import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarNoticiasLayoutComponent } from './listar-noticias-layout.component';

describe('ListarNoticiasLayoutComponent', () => {
  let component: ListarNoticiasLayoutComponent;
  let fixture: ComponentFixture<ListarNoticiasLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarNoticiasLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarNoticiasLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
