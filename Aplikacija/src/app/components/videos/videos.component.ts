import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/models/Video';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css'],
})
export class VideosComponent implements OnInit {
  videos: Video[];

  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
    this.videos = this.videoService.getVideos();
  }
}
