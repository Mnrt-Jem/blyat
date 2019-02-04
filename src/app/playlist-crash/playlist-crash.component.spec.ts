import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistCrashComponent } from './playlist-crash.component';

describe('PlaylistCrashComponent', () => {
  let component: PlaylistCrashComponent;
  let fixture: ComponentFixture<PlaylistCrashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistCrashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistCrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
