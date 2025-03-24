import { QueryClient } from "@tanstack/react-query";
import { App } from "./App";

export const queryClient = new QueryClient();
export const app = new App();
export const storage = app.storage;
export const token = app.token;
export const util = app.util;
export const auth = app.auth;
export const router = app.router;
