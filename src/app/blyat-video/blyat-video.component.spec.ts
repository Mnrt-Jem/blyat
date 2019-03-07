import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlyatVideoComponent } from './blyat-video.component';

describe('BlyatVideoComponent', () => {
  let component: BlyatVideoComponent;
  let fixture: ComponentFixture<BlyatVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlyatVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlyatVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
