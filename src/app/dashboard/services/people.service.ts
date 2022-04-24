import people from './json/people.json';
import { MainService } from './main.service';

export class PeopleService extends MainService {
  getAllData(onSuccess: Function) {
    return this.getData(people, onSuccess);
  }
}
