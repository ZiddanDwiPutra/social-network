import { Component } from '@angular/core';
import {
  faBook,
  faCamera,
  faCircleDot,
  faComment,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';
import { GridItem } from '../shared/grid/gridItem';
import { VideoService } from './services/video.service';
import { ActivityService } from './services/activity.service';
import { PeopleService } from './services/people.service';
import { DocumentService } from './services/document.service';
import { ChannelService } from './services/channel.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [
    VideoService,
    ActivityService,
    PeopleService,
    DocumentService,
    ChannelService,
  ],
})
export class DashboardComponent {
  activityList: GridItem[] = [];
  videoList: GridItem[] = [];
  peopleList: GridItem[] = [];
  documentList: GridItem[] = [];
  channelList: GridItem[] = [];
  faPlus = faPlusCircle;
  faDots = faCircleDot;

  constructor(
    private videoService: VideoService,
    private activityService: ActivityService,
    private peopleService: PeopleService,
    private documentService: DocumentService,
    private channelService: ChannelService
  ) {}

  ngOnInit() {
    this.fetchAllData();
  }

  getIconFromType(type: string): string {
    if (type == 'comment') return faComment;
    if (type == 'video') return faCamera;
    if (type == 'document') return faBook;
  }

  getPublishDate(datetime: string): string {
    return 'on ' + new Date(datetime).toLocaleDateString();
  }
  toNumberFormat(value: number): string {
    return new Intl.NumberFormat().format(value);
  }

  async fetchAllData() {
    let promise1 = this.videoService.getAllData((response) => {
      this._fillVideoData(response);
    });
    let promise2 = this.activityService.getAllData((response) => {
      this._fillActivityData(response);
    });
    let promise3 = this.peopleService.getAllData((response) => {
      this._fillPeopleData(response);
    });
    let promise4 = this.documentService.getAllData((response) => {
      this._fillDocumentData(response);
    });
    let promise5 = this.channelService.getAllData((response) => {
      this._fillChannelData(response);
    });
    Promise.all([
      await promise1,
      await promise2,
      await promise3,
      await promise4,
      await promise5,
    ]);
  }

  _fillVideoData(videos) {
    let idx = 0;
    for (let video of videos) {
      let item = new GridItem();
      item.title = idx == 0 ? video.title : '';
      item.subTitle = video.userName;
      item.subTitle2 = this.toNumberFormat(video.views).concat(' views');
      item.thumbnail = video.thumbnail;
      this.videoList.push(item);
      idx++;
    }
  }
  _fillActivityData(activities) {
    for (let activity of activities) {
      let item = new GridItem();
      item.title = activity.userName;
      item.subTitle = activity.value;
      item.subTitle2 = activity.action;
      item.iconLabel = this.getPublishDate(activity.datetime);
      item.icon = this.getIconFromType(activity.type);
      item.thumbnail = activity.thumbnail;
      this.activityList.push(item);
    }
  }
  _fillPeopleData(peopleList) {
    let idx = 0;
    for (let people of peopleList) {
      let views = this.toNumberFormat(people.views).concat(' views');
      let item = new GridItem();
      item.title = idx == 0 ? people.userName : '';
      item.subTitle = idx == 0 ? people.role : people.userName;
      item.subTitle2 = idx == 0 ? views : '';
      item.thumbnail = people.thumbnail;
      this.peopleList.push(item);
      idx++;
    }
  }
  _fillDocumentData(documentList) {
    let idx = 0;
    for (let doc of documentList) {
      let views = this.toNumberFormat(doc.views).concat(' views');
      let item = new GridItem();
      item.title = doc.title;
      item.subTitle = idx == 0 ? doc.userName : views;
      item.subTitle2 = idx == 0 ? views : '';
      item.thumbnail = doc.thumbnail;
      this.documentList.push(item);
      idx++;
    }
  }
  _fillChannelData(channelList) {
    for (let channel of channelList) {
      let item = new GridItem();
      item.title = channel.title;
      item.thumbnail = channel.thumbnail;
      this.channelList.push(item);
    }
  }
}
