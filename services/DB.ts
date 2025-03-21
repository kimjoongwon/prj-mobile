import { MMKV } from "react-native-mmkv";
import { App } from "./App";

export class DB {
  databases: Map<string, MMKV> = new Map();
  app: App;

  constructor(app: App) {
    this.app = app;
    this.databases.set("common", new MMKV());
  }

  getCommonDatabase() {
    return this.databases.get("common");
  }

  createDatabase({ tenantId }: { tenantId: string }) {
    const mmkv = new MMKV({
      id: tenantId,
      encryptionKey: tenantId,
    });
    this.databases.set(tenantId, mmkv);
  }

  getDatabase({ tenantId }: { tenantId: string }) {
    return this.databases.get(tenantId);
  }
}
