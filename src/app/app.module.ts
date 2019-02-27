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
import {HttpClientModule} from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BlyatComponent } from './blyat/blyat.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  { path: 'blyat', component: BlyatComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'dash', component: PlaylistDashcamComponent },
  { path: 'drunk', component: PlaylistDrunkComponent },
  { path: 'crash', component: PlaylistCrashComponent },
  { path: 'fail', component: PlaylistFailComponent },
];

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    PlaylistDrunkComponent,
    FooterComponent,
    PlaylistDashcamComponent,
    PlaylistCrashComponent,
    PlaylistFailComponent,
    SafePipe,
    BlyatComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
