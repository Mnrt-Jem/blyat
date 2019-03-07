import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFailComponent } from './manage-fail.component';

describe('ManageFailComponent', () => {
  let component: ManageFailComponent;
  let fixture: ComponentFixture<ManageFailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageFailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageFailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
