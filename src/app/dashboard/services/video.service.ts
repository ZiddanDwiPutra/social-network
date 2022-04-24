import videos from './json/videos.json';
import { MainService } from './main.service';

export class VideoService extends MainService {
  getAllData(onSuccess: Function) {
    return this.getData(videos, onSuccess);
  }
}
