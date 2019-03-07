import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCrashComponent } from './manage-crash.component';

describe('ManageCrashComponent', () => {
  let component: ManageCrashComponent;
  let fixture: ComponentFixture<ManageCrashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCrashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
