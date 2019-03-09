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
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BlyatComponent } from './blyat/blyat.component';
import { AdminComponent } from './admin/admin.component';
import {AuthService} from './service/auth.service';
import {GoogleApiModule, NG_GAPI_CONFIG, NgGapiClientConfig} from 'ng-gapi';
import {HttpRequestInterceptor} from './service/httpRequestInterceptor';
import { BlyatVideoComponent } from './blyat-video/blyat-video.component';
import { BlyatManagerComponent } from './blyat-manager/blyat-manager.component';
import { ManageCrashComponent } from './manage-crash/manage-crash.component';
import { ManageDashcamComponent } from './manage-dashcam/manage-dashcam.component';
import { ManageDrunkComponent } from './manage-drunk/manage-drunk.component';
import { ManageFailComponent } from './manage-fail/manage-fail.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastModule} from '../assets/primeng/toast';
const appRoutes: Routes = [
  { path: 'blyat', component: BlyatComponent },
  { path: 'blyat-admin', component: AdminComponent },
  { path: 'dash', component: PlaylistDashcamComponent },
  { path: 'drunk', component: PlaylistDrunkComponent },
  { path: 'crash', component: PlaylistCrashComponent },
  { path: 'fail', component: PlaylistFailComponent },
  { path: 'blyat-video/:id', component: BlyatVideoComponent },
  { path: 'blyat-manager', component: BlyatManagerComponent },

];

const gapiClientConfig: NgGapiClientConfig = {
  client_id: '355657838796-b4hoh2104ng5l586i2a654c5v0m2na0j.apps.googleusercontent.com',
  discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],
  scope: [
    'https://www.googleapis.com/auth/youtube.force-ssl',
    'https://www.googleapis.com/auth/youtube.readonly',
  ].join(' ')
};

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
    BlyatVideoComponent,
    BlyatManagerComponent,
    ManageCrashComponent,
    ManageDashcamComponent,
    ManageDrunkComponent,
    ManageFailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastModule,
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    }),
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
