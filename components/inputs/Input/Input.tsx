import { useFormField } from '@cocrepo/hooks';
import type { MobxProps } from '@cocrepo/types';
import { get } from 'lodash-es';
import { action } from 'mobx';
import { observer } from 'mobx-react-lite';
import type React from 'react';
import { type InputProps as BaseInputProps, InputView } from './InputView';

export interface InputProps<T>
	extends MobxProps<T>,
		Omit<BaseInputProps, 'value' | 'onChangeText'> {}

/**
 * Input - MobX Integrated Component
 * Wraps InputView with MobX state management
 */
export const Input = observer(<T extends object>(props: InputProps<T>) => {
	const { state, path, ...rest } = props;

	const initialValue = get(state, path) as string;

	const { localState } = useFormField({
		initialValue,
		state,
		path,
	});

	const handleChange = action((value: string) => {
		localState.value = value;
	});

	return (
		<InputView {...rest} value={localState.value} onChangeText={handleChange} />
	);
});

Input.displayName = 'Input';

export default Input;
