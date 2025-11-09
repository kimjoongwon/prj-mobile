import { observer } from 'mobx-react-lite';
import type React from 'react';
import { ScreenView, type ScreenViewProps } from './ScreenView';

export type ScreenProps = ScreenViewProps;

/**
 * Screen component with MobX observer wrapper.
 * Currently just wraps ScreenView with observer for future state integration.
 */
export const Screen: React.FC<ScreenProps> = observer(props => {
	return <ScreenView {...props} />;
});
