import channels from './json/channels.json';
import { MainService } from './main.service';

export class ChannelService extends MainService {
  getAllData(onSuccess: Function) {
    return this.getData(channels, onSuccess);
  }
}
