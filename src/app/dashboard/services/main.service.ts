export class MainService{
  getData(responseData: any, onSuccess: Function) {
    return Promise.all([]).then(onSuccess(responseData));
  }
}