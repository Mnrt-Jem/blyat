import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlyatManagerComponent } from './blyat-manager.component';

describe('BlyatManagerComponent', () => {
  let component: BlyatManagerComponent;
  let fixture: ComponentFixture<BlyatManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlyatManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlyatManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
