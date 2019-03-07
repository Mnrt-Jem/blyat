import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistDrunkComponent } from './playlist-drunk.component';

describe('PlaylistDrunkComponent', () => {
  let component: PlaylistDrunkComponent;
  let fixture: ComponentFixture<PlaylistDrunkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistDrunkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistDrunkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
