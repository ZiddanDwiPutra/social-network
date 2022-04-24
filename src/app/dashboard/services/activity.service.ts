import activity from './json/activity.json';
import { MainService } from './main.service';

export class ActivityService extends MainService {
  getAllData(onSuccess: Function) {
    return this.getData(activity, onSuccess);
  }
}
