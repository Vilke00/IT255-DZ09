import { Component, Input, OnInit } from '@angular/core';
import { Video } from 'src/app/models/Video';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css'],
})
export class MainFormComponent implements OnInit {
  @Input() thumbnailUrl: string;
  @Input() description: string;
  @Input() videoUrl: string;

  constructor(private videoService: VideoService) {}

  ngOnInit(): void {}

  addVideo() {
    this.videoService.addVideo(
      new Video(
        this.videoService.getId(this.videoUrl),
        this.thumbnailUrl,
        this.description
      )
    );
  }
}
