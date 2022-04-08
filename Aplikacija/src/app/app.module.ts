import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VideoUrlFormComponent } from './components/video-url-form/video-url-form.component';
import { MainFormComponent } from './components/main-form/main-form.component';
import { VideosComponent } from './components/videos/videos.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { YoutubeService } from './services/youtube.service';
import { VideoService } from './services/video.service';
import { SafeIframePipe } from './helpers/safe-iframe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VideoUrlFormComponent,
    MainFormComponent,
    VideosComponent,
    SafeIframePipe,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [YoutubeService, VideoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
