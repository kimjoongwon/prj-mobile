import { useFormField } from '@cocrepo/hooks';
import type { MobxProps } from '@cocrepo/types';
import { get } from 'lodash-es';
import { observer } from 'mobx-react-lite';
import {
	Select as BaseSelect,
	type SelectProps as BaseSelectProps,
} from './Select';

// SelectOption 타입 정의
type SelectOption = { value: string; label: string } | undefined;

export interface SelectProps<T = any>
	extends MobxProps<T>,
		Omit<BaseSelectProps, 'value' | 'onValueChange'> {}

export const Select = observer(<T extends object>(props: SelectProps<T>) => {
	const { state, path, ...rest } = props;

	const initialValue = get(state, path) as SelectOption;

	const formField = useFormField<T, SelectOption>({
		value: initialValue,
		state,
		path,
	});

	return (
		<BaseSelect
			{...rest}
			value={formField.state.value}
			onValueChange={formField.setValue}
		/>
	);
}) as typeof BaseSelect &
	(<T extends object>(props: SelectProps<T>) => React.ReactElement);

Select.displayName = 'MobxSelect';

// Compound components
Select.Trigger = BaseSelect.Trigger;
Select.Value = BaseSelect.Value;
Select.Portal = BaseSelect.Portal;
Select.Overlay = BaseSelect.Overlay;
Select.Content = BaseSelect.Content;
Select.Close = BaseSelect.Close;
Select.ListLabel = BaseSelect.ListLabel;
Select.Item = BaseSelect.Item;
Select.ItemLabel = BaseSelect.ItemLabel;
Select.ItemDescription = BaseSelect.ItemDescription;
Select.ItemIndicator = BaseSelect.ItemIndicator;

export { BaseSelect as SelectComponent };
