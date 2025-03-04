import { get, set } from "lodash-es";

export class UtilService {
  static get(state: any, path: any) {
    return get(state, path);
  }
  static set(state: any, path: any, value: any) {
    return set(state, path, value);
  }
}
