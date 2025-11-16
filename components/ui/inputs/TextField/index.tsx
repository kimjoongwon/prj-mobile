import { useFormField } from '@cocrepo/hooks';
import type { MobxProps } from '@cocrepo/types';
import get from 'lodash-es/get';
import { observer } from 'mobx-react-lite';
import React from 'react';
import {
	TextFieldDescription,
	TextFieldErrorMessage,
	TextFieldInput,
	TextFieldInputEndContent,
	TextFieldInputStartContent,
	TextFieldLabel,
	TextField as TextFieldUI,
	type TextFieldProps as TextFieldUIProps,
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

		const formField = useFormField<T, string>({
			value: initialValue,
			state,
			path,
		});

		// Clone TextField.Input children to inject value and onChangeText
		const enhancedChildren = React.Children.map(children, child => {
			if (React.isValidElement(child) && child.type === TextFieldInput) {
				return React.cloneElement(child as any, {
					value: formField.state.value,
					onChangeText: formField.setValue,
				});
			}
			return child;
		});

		return <TextFieldUI {...rest}>{enhancedChildren}</TextFieldUI>;
	}
) as typeof TextFieldUI &
	(<T extends object>(props: TextFieldProps<T>) => React.ReactElement);

TextField.displayName = 'MobxTextField';

// Attach compound components
TextField.Label = TextFieldLabel;
TextField.Input = TextFieldInput;
TextField.InputStartContent = TextFieldInputStartContent;
TextField.InputEndContent = TextFieldInputEndContent;
TextField.Description = TextFieldDescription;
TextField.ErrorMessage = TextFieldErrorMessage;

// Export alias for UI component (stateless)
export { TextFieldUI };
export type { TextFieldUIProps };

// Re-export subcomponents
	export {
		TextFieldDescription,
		TextFieldErrorMessage,
		TextFieldInput,
		TextFieldInputEndContent,
		TextFieldInputStartContent,
		TextFieldLabel
	};

// Re-export types
	export type {
		TextFieldDescriptionProps,
		TextFieldErrorMessageProps,
		TextFieldLabelProps,
		TextFieldRootProps,
		TextFieldSize,
		TextFieldVariant
	} from './TextField';

export default TextField;
