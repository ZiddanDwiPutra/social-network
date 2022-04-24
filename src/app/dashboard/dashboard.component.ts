import { Component } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { GridItem } from '../shared/grid/gridItem';
import { VideoService } from './services/video.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [VideoService],
})
export class DashboardComponent {
  activityList: GridItem[] = [];

  constructor(private videoService: VideoService) {}
  ngOnInit() {
    let datas = this.videoService.getAllData();
    console.log(datas);

    let i = 0;
    while (i < 9) {
      let item = new GridItem();
      item.title = 'Asxe' + i;
      item.subTitle = 'Asxe';
      item.subTitle2 = 'Asxe';
      item.iconLabel = 'Asxe';
      item.views = 1000;
      item.icon = faHeart;
      item.thumbnail =
        'https://media.istockphoto.com/photos/prize-wheel-picture-id175482570?b=1&k=20&m=175482570&s=170667a&w=0&h=cHDwnCHXxRE5jMtwX-k1Xq4KSrOTJyGIvt91hrOkZqA=';
      this.activityList.push(item);
      i++;
    }
  }
}
