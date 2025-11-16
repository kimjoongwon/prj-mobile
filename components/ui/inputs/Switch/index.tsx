import { useFormField } from '@cocrepo/hooks';
import type { MobxProps } from '@cocrepo/types';
import { get } from 'lodash-es';
import { observer } from 'mobx-react-lite';
import {
	Switch as BaseSwitch,
	type SwitchProps as BaseSwitchProps,
} from './Switch';

export interface SwitchProps<T = any>
	extends MobxProps<T>,
		Omit<BaseSwitchProps, 'isSelected' | 'onSelectedChange'> {}

export const Switch = observer(<T extends object>(props: SwitchProps<T>) => {
	const { state, path, ...rest } = props;

	const initialValue = (get(state, path) as boolean) || false;

	const formField = useFormField<T, boolean>({
		value: initialValue,
		state,
		path,
	});

	return (
		<BaseSwitch
			{...rest}
			isSelected={formField.state.value}
			onSelectedChange={formField.setValue}
		/>
	);
}) as typeof BaseSwitch &
	(<T extends object>(props: SwitchProps<T>) => React.ReactElement);

Switch.displayName = 'MobxSwitch';

// Compound components 연결
Switch.Thumb = BaseSwitch.Thumb;
Switch.StartContent = BaseSwitch.StartContent;
Switch.EndContent = BaseSwitch.EndContent;

export { BaseSwitch as SwitchComponent };
