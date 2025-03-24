import { App } from "./App";
import { User } from "./User";

export class Auth {
  app: App;
  _loggedIn: boolean = false;
  user: User;
  constructor(app: App, user: User) {
    this.app = app;
    this.user = user;
  }

  afterLogin(token: string) {
    this.app.storage.commonDB?.set("token", token);
  }
}
