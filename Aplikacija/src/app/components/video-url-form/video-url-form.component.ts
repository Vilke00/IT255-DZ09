import { Component, Input, OnInit } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';
import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
  selector: 'app-video-url-form',
  templateUrl: './video-url-form.component.html',
  styleUrls: ['./video-url-form.component.css'],
})
export class VideoUrlFormComponent implements OnInit {
  thumbnailUrl: string;
  description: string;

  videoUrl: string;
  data: any[];

  constructor(
    private youtubeService: YoutubeService,
    private videoService: VideoService
  ) {}

  ngOnInit(): void {}

  m() {
    console.log(this.videoService.getId(this.videoUrl));

    this.youtubeService
      .getData(this.videoService.getId(this.videoUrl))
      .subscribe((data) => {
        console.log(data.items[0].snippet.thumbnails.high.url);
        console.log(data.items[0].snippet.description);

        this.thumbnailUrl = data.items[0].snippet.thumbnails.high.url;
        this.description = data.items[0].snippet.description;
      });
  }
}
