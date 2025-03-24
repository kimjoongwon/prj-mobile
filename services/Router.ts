import { router } from "expo-router";

export class Router {
  push(...args: Parameters<typeof router.push>) {
    router.push(...args);
  }
}
