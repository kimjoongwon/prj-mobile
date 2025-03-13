import { cva } from "class-variance-authority";
import { View as RNView, type ViewProps } from "react-native";

const view = cva([""]);

export function View({ className, ...rest }: ViewProps) {
  return <RNView {...rest} className={view({ className })} />;
}
