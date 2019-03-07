import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistFailComponent } from './playlist-fail.component';

describe('PlaylistFailComponent', () => {
  let component: PlaylistFailComponent;
  let fixture: ComponentFixture<PlaylistFailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistFailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistFailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
