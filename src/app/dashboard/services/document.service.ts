import documents from './json/documents.json';
import { MainService } from './main.service';

export class DocumentService extends MainService {
  getAllData(onSuccess: Function) {
    return this.getData(documents, onSuccess);
  }
}
