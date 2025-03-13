import { registerSheet, SheetDefinition } from "react-native-actions-sheet";
import { GymActionSheet } from "./GymActionSheet/GymActionSheet";

registerSheet("gyms", GymActionSheet);

declare module "react-native-actions-sheet" {
  interface Sheets {
    gyms: SheetDefinition;
  }
}

export {};
