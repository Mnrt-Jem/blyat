import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlyatComponent } from './blyat.component';

describe('BlyatComponent', () => {
  let component: BlyatComponent;
  let fixture: ComponentFixture<BlyatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlyatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlyatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
