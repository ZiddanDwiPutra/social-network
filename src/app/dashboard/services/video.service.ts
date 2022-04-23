import videos from './json/videos.json';
export class VideoService {
  constructor() {}
  getAllData() {
    return videos;
  }
}
