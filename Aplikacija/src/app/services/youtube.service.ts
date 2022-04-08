import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  constructor(private http: HttpClient) {}

  getData(videoId: string): Observable<any> {
    // Unique api key
    const API_KEY = 'AIzaSyBS0wtWRHEghAuZ1GuPBhl8cdELKq_DcuU';

    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`;

    return this.http.get<any>(url);
  }
}
