
export default class BaseApi {
  static getImagesData(onSuccess) {
    return fetch('../../api/Images.json')
      .then((data) => data.toJson())
      .then((data) => onSuccess(data));
  }
}
