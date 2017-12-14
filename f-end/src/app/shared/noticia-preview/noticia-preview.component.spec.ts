import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaPreviewComponent } from './noticia-preview.component';

describe('NoticiaPreviewComponent', () => {
  let component: NoticiaPreviewComponent;
  let fixture: ComponentFixture<NoticiaPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiaPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
