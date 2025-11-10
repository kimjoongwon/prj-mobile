import type {
	TextFieldDescriptionProps,
	TextFieldErrorMessageProps,
	TextFieldInputProps,
	TextFieldLabelProps,
	TextFieldRootProps,
} from 'heroui-native';
import { TextField as HeroTextField } from 'heroui-native';
import type React from 'react';

/**
 * Custom variant and size types for TextField
 */
export type TextFieldVariant = 'default' | 'outlined';
export type TextFieldSize = 'sm' | 'md' | 'lg';

/**
 * TextFieldView Props
 * Extends TextFieldRootProps with custom variant, size, description, and errorMessage props
 */
export interface TextFieldViewProps extends TextFieldRootProps {
	variant?: TextFieldVariant;
	size?: TextFieldSize;
	// Description props
	description?: React.ReactNode;
	descriptionProps?: Omit<TextFieldDescriptionProps, 'children'>;
	// ErrorMessage props
	errorMessage?: React.ReactNode;
	errorMessageProps?: Omit<TextFieldErrorMessageProps, 'children'>;
}

/**
 * TextFieldView Component
 * UI container component that wraps HeroTextField with description and errorMessage support
 *
 * Props can be passed either through:
 * 1. Direct children - for complete control
 * 2. Props - for convenience (description, errorMessage)
 *
 * Usage (with props):
 * ```tsx
 * <TextFieldView
 *   description="We'll never share your email"
 *   errorMessage="Invalid email address"
 * >
 *   <TextFieldView.Label>Email</TextFieldView.Label>
 *   <TextFieldView.Input placeholder="Enter email" />
 * </TextFieldView>
 * ```
 *
 * Usage (with children):
 * ```tsx
 * <TextFieldView>
 *   <TextFieldView.Label>Email</TextFieldView.Label>
 *   <TextFieldView.Input placeholder="Enter email" />
 *   <TextFieldView.Description>We'll never share your email</TextFieldView.Description>
 * </TextFieldView>
 * ```
 */
const TextFieldViewComponent: React.FC<TextFieldViewProps> = ({
	variant,
	size,
	description,
	descriptionProps,
	errorMessage,
	errorMessageProps,
	children,
	...props
}) => {
	return (
		<HeroTextField {...props}>
			{children}
			{description && (
				<HeroTextField.Description {...descriptionProps}>
					{description}
				</HeroTextField.Description>
			)}
			{errorMessage && (
				<HeroTextField.ErrorMessage {...errorMessageProps}>
					{errorMessage}
				</HeroTextField.ErrorMessage>
			)}
		</HeroTextField>
	);
};

TextFieldViewComponent.displayName = 'TextFieldView';

/**
 * TextFieldView - Composite component with subcomponents
 * Provides both container and subcomponents for flexible composition
 */
export const TextFieldView = Object.assign(TextFieldViewComponent, {
	Label: HeroTextField.Label,
	Input: HeroTextField.Input,
	Description: HeroTextField.Description,
	ErrorMessage: HeroTextField.ErrorMessage,
});

// Re-export subcomponents for convenience
export const TextFieldLabel = HeroTextField.Label;
export const TextFieldInput = HeroTextField.Input;
export const TextFieldDescription = HeroTextField.Description;
export const TextFieldErrorMessage = HeroTextField.ErrorMessage;

// Re-export types
export type {
	TextFieldDescriptionProps,
	TextFieldErrorMessageProps, TextFieldInputProps,
	TextFieldLabelProps, TextFieldRootProps
};

export default TextFieldView;
