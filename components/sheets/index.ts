import { registerSheet, SheetDefinition } from "react-native-actions-sheet";
import { GymActionSheet } from "./GymActionSheet/Gym";

registerSheet("gyms", GymActionSheet);

declare module "react-native-actions-sheet" {
  interface Sheets {
    gyms: SheetDefinition;
  }
}

export {};
