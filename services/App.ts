import { makeAutoObservable } from "mobx";
import { Auth } from "./Auth";
import { Storage } from "./Storage";
import { Token } from "./Token";
import { Util } from "./Util";
import { User } from "./User";
import { Router } from "./Router";

export class App {
  isInitialized = false;
  token: Token;
  storage: Storage;
  util: Util;
  user: User;
  auth?: Auth;
  router: Router;

  constructor() {
    this.token = new Token(this);
    this.storage = new Storage(this);
    this.util = new Util(this);
    this.user = new User(this);
    this.auth = new Auth(this, this.user);
    this.router = new Router();
    this.isInitialized = true;
    makeAutoObservable(this);
  }

  setIsInitialized(isInitialized: boolean) {
    this.isInitialized = isInitialized;
  }
}
