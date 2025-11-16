import { useFormField } from '@cocrepo/hooks';
import type { MobxProps } from '@cocrepo/types';
import { get } from 'lodash-es';
import { observer } from 'mobx-react-lite';
import {
	RadioGroup as BaseRadioGroup,
	type RadioGroupProps as BaseRadioGroupProps,
} from './RadioGroup';

export interface RadioGroupProps<T = any>
	extends MobxProps<T>,
		Omit<BaseRadioGroupProps, 'value' | 'onValueChange'> {}

export const RadioGroup = observer(
	<T extends object>(props: RadioGroupProps<T>) => {
		const { state, path, ...rest } = props;

		const initialValue = get(state, path);

		const formField = useFormField<T, string>({
			value: initialValue as string,
			state,
			path,
		});

		return (
			<BaseRadioGroup
				{...rest}
				value={formField.state.value}
				onValueChange={formField.setValue}
			/>
		);
	}
) as typeof BaseRadioGroup &
	(<T extends object>(props: RadioGroupProps<T>) => React.ReactElement);

RadioGroup.displayName = 'MobxRadioGroup';

// Compound components
RadioGroup.Item = BaseRadioGroup.Item;
RadioGroup.Label = BaseRadioGroup.Label;
RadioGroup.Description = BaseRadioGroup.Description;
RadioGroup.Indicator = BaseRadioGroup.Indicator;
RadioGroup.IndicatorThumb = BaseRadioGroup.IndicatorThumb;
RadioGroup.ErrorMessage = BaseRadioGroup.ErrorMessage;

export { BaseRadioGroup as RadioGroupComponent };
