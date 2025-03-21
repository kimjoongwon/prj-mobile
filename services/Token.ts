import { App } from "./App";
import { decode, verify } from "jsonwebtoken";

export class Token {
  app: App;
  constructor(app: App) {
    this.app = app;
  }
  decode() {
    const accessToken = this.app.db
      .getCommonDatabase()
      ?.getString("accessToken");

    return;
  }

  verify() {}

  removeToken() {}

  getUserId() {}
}
