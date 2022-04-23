import { Component } from '@angular/core';
import { VideoService } from './services/video.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [VideoService],
})
export class DashboardComponent {
  constructor(private videoService: VideoService) {}
  ngOnInit() {
    let datas = this.videoService.getAllData();
    console.log(datas);
  }
}
