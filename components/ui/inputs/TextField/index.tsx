import { observer } from 'mobx-react-lite';
import { action } from 'mobx';
import { useFormField } from '@cocrepo/hooks';
import type { MobxProps } from '@cocrepo/types';
import get from 'lodash-es/get';
import React from 'react';
import {
	TextField as TextFieldUI,
	type TextFieldProps as TextFieldUIProps,
	TextFieldLabel,
	TextFieldInput,
	TextFieldInputStartContent,
	TextFieldInputEndContent,
	TextFieldDescription,
	TextFieldErrorMessage,
} from './TextField';

/**
 * TextField Props (MobX integrated)
 * Extends UI TextField props with MobX state management
 */
export interface TextFieldProps<T = any>
	extends TextFieldUIProps,
		MobxProps<T> {}

/**
 * TextField Component (MobX integrated)
 * Stateful component with MobX state management
 *
 * Usage:
 * ```tsx
 * <TextField state={formState} path="email">
 *   <TextField.Label>Email</TextField.Label>
 *   <TextField.Input placeholder="Enter email" />
 * </TextField>
 * ```
 */
export const TextField = observer(
	<T extends object = any>(props: TextFieldProps<T>) => {
		const { state, path, children, ...rest } = props;

		const initialValue = (get(state, path) as string) || '';

		const { localState } = useFormField({
			initialValue,
			state,
			path,
		});

		const handleValueChange = action((value: string) => {
			localState.value = value;
		});

		// Clone TextField.Input children to inject value and onChangeText
		const enhancedChildren = React.Children.map(children, child => {
			if (React.isValidElement(child) && child.type === TextFieldInput) {
				return React.cloneElement(child as any, {
					value: localState.value,
					onChangeText: handleValueChange,
				});
			}
			return child;
		});

		return <TextFieldUI {...rest}>{enhancedChildren}</TextFieldUI>;
	}
);

TextField.displayName = 'MobxTextField';

// Export alias for UI component (stateless)
export { TextFieldUI };
export type { TextFieldUIProps };

// Re-export subcomponents
export {
	TextFieldLabel,
	TextFieldInput,
	TextFieldInputStartContent,
	TextFieldInputEndContent,
	TextFieldDescription,
	TextFieldErrorMessage,
};

// Re-export types
export type {
	TextFieldVariant,
	TextFieldSize,
	TextFieldRootProps,
	TextFieldLabelProps,
	TextFieldDescriptionProps,
	TextFieldErrorMessageProps,
} from './TextField';

export default TextField;
