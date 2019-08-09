import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TinymcComponent } from './tinymc.component';

describe('TinymcComponent', () => {
  let component: TinymcComponent;
  let fixture: ComponentFixture<TinymcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinymcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinymcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
