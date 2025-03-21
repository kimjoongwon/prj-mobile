import { get, set } from "lodash-es";
import { App } from "./App";

export class Util {
  app: App;
  constructor(app: App) {
    this.app = app;
  }
  static get(state: any, path: any) {
    return get(state, path);
  }
  static set(state: any, path: any, value: any) {
    return set(state, path, value);
  }
}
