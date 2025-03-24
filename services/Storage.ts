import { MMKV } from "react-native-mmkv";
import { App } from "./App";

export class Storage {
  databases: Map<string, MMKV> = new Map();
  app: App;

  constructor(app: App) {
    console.log("Storage Initialized");
    this.databases.set("common", new MMKV());
    this.app = app;
  }

  get commonDB() {
    return this.databases.get("common");
  }

  createDatabase({ tenantId }: { tenantId: string }) {
    const mmkv = new MMKV({
      id: tenantId,
      encryptionKey: tenantId,
    });
    this.databases.set(tenantId, mmkv);
  }

  database({ tenantId }: { tenantId: string }) {
    return this.databases.get(tenantId);
  }
}
