import { useFormField } from '@cocrepo/hooks';
import type { MobxProps } from '@cocrepo/types';
import { get } from 'lodash-es';
import { action } from 'mobx';
import { observer } from 'mobx-react-lite';
import {
	type RadioGroupProps as BaseRadioGroupProps,
	type MobxRadioGroupProps,
	type RadioGroupColor,
	RadioGroup as RadioGroupComponent,
	type RadioGroupOrientation,
	type RadioGroupRef,
	type RadioGroupSize,
} from './RadioGroup';

export interface RadioGroupProps<T, D = any>
	extends MobxProps<T>,
		Omit<BaseRadioGroupProps<D>, 'value' | 'onValueChange'> {}

export const RadioGroup = observer(
	<T extends object, D = any>(props: RadioGroupProps<T, D>) => {
		const { state, path, ...rest } = props;

		const initialValue = get(state, path);

		const { localState } = useFormField({
			initialValue,
			state,
			path,
		});

		const handleValueChange = action((value: any) => {
			localState.value = value;
		});

		return (
			<RadioGroupComponent
				{...rest}
				value={localState.value}
				onValueChange={handleValueChange}
			/>
		);
	}
);

RadioGroup.displayName = 'MobxRadioGroup';

export { RadioGroupComponent };
export type {
	BaseRadioGroupProps,
	MobxRadioGroupProps,
	RadioGroupColor,
	RadioGroupOrientation,
	RadioGroupRef,
	RadioGroupSize,
};
