import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { PlaylistDrunkComponent } from './playlist-drunk/playlist-drunk.component';
import { FooterComponent } from './footer/footer.component';
import { PlaylistDashcamComponent } from './playlist-dashcam/playlist-dashcam.component';
import { PlaylistCrashComponent } from './playlist-crash/playlist-crash.component';
import { PlaylistFailComponent } from './playlist-fail/playlist-fail.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    PlaylistDrunkComponent,
    FooterComponent,
    PlaylistDashcamComponent,
    PlaylistCrashComponent,
    PlaylistFailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
