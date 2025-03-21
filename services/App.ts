import { makeAutoObservable } from "mobx";
import { Auth } from "./Auth";
import { DB } from "./DB";
import { Token } from "./Token";
import { Util } from "./Util";

export class App {
  isInitialized = false;
  token: Token;
  db: DB;
  util: Util;
  auth?: Auth;

  constructor() {
    this.token = new Token(this);
    this.db = new DB(this);
    this.util = new Util(this);
    this.auth = new Auth(this);
    this.isInitialized = true;
    makeAutoObservable(this);
  }
}
