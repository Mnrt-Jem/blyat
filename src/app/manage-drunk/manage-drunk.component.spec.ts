import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDrunkComponent } from './manage-drunk.component';

describe('ManageDrunkComponent', () => {
  let component: ManageDrunkComponent;
  let fixture: ComponentFixture<ManageDrunkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageDrunkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageDrunkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
