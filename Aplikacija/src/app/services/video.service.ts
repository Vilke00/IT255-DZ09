import { Injectable } from '@angular/core';
import { Video } from '../models/Video';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  videos: Video[];

  constructor() {
    this.videos = [];
  }

  getVideos(): Video[] {
    return this.videos;
  }

  addVideo(video: Video): void {
    this.videos.unshift(video);
  }

  getId(url: string): string {
    let regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    let match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : '';
  }
}
