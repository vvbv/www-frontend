import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSystemUserComponent } from './edit-system-user.component';

describe('EditSystemUserComponent', () => {
  let component: EditSystemUserComponent;
  let fixture: ComponentFixture<EditSystemUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSystemUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSystemUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
