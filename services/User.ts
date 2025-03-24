import { App } from "./App";

export class User {
  app: App;
  constructor(app: App) {
    this.app = app;
  }

  get isLoggedIn() {
    const isTokenExist = this.app.token.isExist();

    if (!isTokenExist) {
      return false;
    }

    return true;
  }
}
