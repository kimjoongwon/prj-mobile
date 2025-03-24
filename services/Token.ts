import { verifyToken } from "@/codegen/apis";
import { App } from "./App";

export class Token {
  app: App;
  valid: boolean = false;
  constructor(app: App) {
    this.app = app;
    this.verify();
  }

  getToken() {
    const token = this.app.storage.commonDB?.getString("token");
    if (!token) {
      return null;
    }
    return token;
  }

  async verify() {
    const isValid = !!(await verifyToken());
    console.log("Token is valid: ", isValid);
    this.valid = isValid;
  }

  isExist() {
    const token = this.getToken();
    if (!token) {
      return false;
    }
    return true;
  }

  removeToken() {}

  getUserId() {}
}
