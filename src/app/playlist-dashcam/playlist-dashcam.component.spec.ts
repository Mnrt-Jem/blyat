import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistDashcamComponent } from './playlist-dashcam.component';

describe('PlaylistDashcamComponent', () => {
  let component: PlaylistDashcamComponent;
  let fixture: ComponentFixture<PlaylistDashcamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistDashcamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistDashcamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
