import { observer } from 'mobx-react-lite';
import type React from 'react';
import {
	ContentView,
	type ContentViewProps,
} from './ContentView';

export type ContentProps = ContentViewProps;

/**
 * Content component with MobX observer wrapper.
 * Currently just wraps ContentView with observer for future state integration.
 */
export const Content: React.FC<ContentProps> = observer(
	props => {
		return <ContentView {...props} />;
	}
);
