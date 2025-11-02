import { observer } from "mobx-react-lite";
import type React from "react";
import {
  ScreenContainerView,
  type ScreenContainerViewProps,
} from "./ScreenContainerView";

export type ScreenContainerProps = ScreenContainerViewProps;

/**
 * ScreenContainer component with MobX observer wrapper.
 * Currently just wraps ScreenContainerView with observer for future state integration.
 */
export const ScreenContainer: React.FC<ScreenContainerProps> = observer(
	(props) => {
		return <ScreenContainerView {...props} />;
	},
);
