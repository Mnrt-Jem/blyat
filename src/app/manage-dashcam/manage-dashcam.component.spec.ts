import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDashcamComponent } from './manage-dashcam.component';

describe('ManageDashcamComponent', () => {
  let component: ManageDashcamComponent;
  let fixture: ComponentFixture<ManageDashcamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageDashcamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageDashcamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
