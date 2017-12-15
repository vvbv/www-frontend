import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListActivitiesLayoutComponent } from './list-activities-layout.component';

describe('ListActivitiesLayoutComponent', () => {
  let component: ListActivitiesLayoutComponent;
  let fixture: ComponentFixture<ListActivitiesLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListActivitiesLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListActivitiesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
