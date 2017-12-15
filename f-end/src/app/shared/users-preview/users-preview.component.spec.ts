import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersPreviewComponent } from './users-preview.component';

describe('UsersPreviewComponent', () => {
  let component: UsersPreviewComponent;
  let fixture: ComponentFixture<UsersPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
