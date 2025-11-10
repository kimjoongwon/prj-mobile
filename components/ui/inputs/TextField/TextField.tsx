import { useFormField } from '@cocrepo/hooks';
import type { MobxProps } from '@cocrepo/types';
import type { TextFieldInputProps } from 'heroui-native';
import { get } from 'lodash-es';
import { action } from 'mobx';
import { observer } from 'mobx-react-lite';
import type React from 'react';
import type { TextFieldViewProps } from './TextFieldView';
import { TextFieldView } from './TextFieldView';

/**
 * TextField Props - MobX integrated
 * Combines MobX form state with TextFieldView UI properties
 */
export interface TextFieldProps<T>
	extends MobxProps<T>,
		Omit<TextFieldViewProps, 'children'> {
	// Label text
	label?: React.ReactNode;
	// Props for TextFieldView.Input (placeholder, keyboardType, etc.)
	inputProps?: Omit<TextFieldInputProps, 'children' | 'value' | 'onChangeText'>;
}

/**
 * TextField - MobX Integrated Component
 * Wraps TextFieldView with MobX state management for form input handling
 *
 * Usage:
 * ```tsx
 * <TextField
 *   state={formState}
 *   path="email"
 *   label="Email Address"
 *   description="We'll never share your email"
 *   inputProps={{ placeholder: "Enter your email" }}
 * />
 * ```
 */
export const TextField = observer(<T extends object>(props: TextFieldProps<T>) => {
	const { state, path, label, inputProps, ...viewProps } = props;

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
		<TextFieldView {...viewProps} variant='outlined'>
			{label && <TextFieldView.Label>{label}</TextFieldView.Label>}
			<TextFieldView.Input
				{...inputProps}
				value={localState.value}
				onChangeText={handleChange}
			/>
		</TextFieldView>
	);
});

TextField.displayName = 'TextField';

export default TextField;
