import type {
	TextFieldDescriptionProps,
	TextFieldErrorMessageProps,
	TextFieldInputEndContentProps,
	TextFieldInputProps,
	TextFieldInputStartContentProps,
	TextFieldLabelProps,
	TextFieldRootProps,
} from 'heroui-native';
import { TextField as HeroTextField } from 'heroui-native';
import React from 'react';

/**
 * Custom variant and size types for TextField
 */
export type TextFieldVariant = 'default' | 'outlined';
export type TextFieldSize = 'sm' | 'md' | 'lg';

/**
 * TextField Props
 * Extends TextFieldRootProps with custom variant, size, description, and errorMessage props
 */
export interface TextFieldProps extends TextFieldRootProps {
	variant?: TextFieldVariant;
	size?: TextFieldSize;
	// InputStartContent props
	inputStartContent?: React.ReactNode;
	inputStartContentProps?: Omit<TextFieldInputStartContentProps, 'children'>;
	// InputEndContent props
	inputEndContent?: React.ReactNode;
	inputEndContentProps?: Omit<TextFieldInputEndContentProps, 'children'>;
	// Description props
	description?: React.ReactNode;
	descriptionProps?: Omit<TextFieldDescriptionProps, 'children'>;
	// ErrorMessage props
	errorMessage?: React.ReactNode;
	errorMessageProps?: Omit<TextFieldErrorMessageProps, 'children'>;
}

/**
 * TextField Component
 * UI container component that wraps HeroTextField with description and errorMessage support
 *
 * Component order is guaranteed: Label → Input → Description → ErrorMessage
 * This follows the heroui-native standard structure
 *
 * Props can be passed either through:
 * 1. Props - for convenience (inputStartContent, inputEndContent, description, errorMessage)
 * 2. Direct children - for complete control
 *
 * Usage (with props):
 * ```tsx
 * <TextField
 *   inputStartContent={<Icon />}
 *   inputEndContent={<Button />}
 *   description="We'll never share your email"
 *   errorMessage="Invalid email address"
 * >
 *   <TextField.Label>Email</TextField.Label>
 *   <TextField.Input placeholder="Enter email" />
 * </TextField>
 * ```
 *
 * Usage (with children):
 * ```tsx
 * <TextField>
 *   <TextField.Label>Email</TextField.Label>
 *   <TextField.Input placeholder="Enter email">
 *     <TextField.InputStartContent><Icon /></TextField.InputStartContent>
 *     <TextField.InputEndContent><Button /></TextField.InputEndContent>
 *   </TextField.Input>
 *   <TextField.Description>We'll never share your email</TextField.Description>
 *   <TextField.ErrorMessage>Invalid email</TextField.ErrorMessage>
 * </TextField>
 * ```
 */
const TextFieldComponent: React.FC<TextFieldProps> = ({
	variant,
	size,
	inputStartContent,
	inputStartContentProps,
	inputEndContent,
	inputEndContentProps,
	description,
	descriptionProps,
	errorMessage,
	errorMessageProps,
	children,
	...props
}) => {
	// Helper function to check if a child is TextField.Input
	const isInputComponent = (child: React.ReactNode): boolean => {
		return React.isValidElement(child) && child.type === HeroTextField.Input;
	};

	// Helper function to render children in correct order
	const renderChildren = () => {
		const childArray = React.Children.toArray(children);
		const inputChild = childArray.find(isInputComponent) as
			| React.ReactElement<TextFieldInputProps>
			| undefined;
		const otherChildren = childArray.filter(child => !isInputComponent(child));

		return (
			<>
				{otherChildren}
				{inputChild &&
					React.cloneElement(inputChild, {}, [
						inputStartContent && (
							<HeroTextField.InputStartContent
								key="start"
								{...inputStartContentProps}
							>
								{inputStartContent}
							</HeroTextField.InputStartContent>
						),
						...(React.Children.toArray(inputChild.props.children) || []),
						inputEndContent && (
							<HeroTextField.InputEndContent
								key="end"
								{...inputEndContentProps}
							>
								{inputEndContent}
							</HeroTextField.InputEndContent>
						),
					])}
				{description && (
					<HeroTextField.Description key="description" {...descriptionProps}>
						{description}
					</HeroTextField.Description>
				)}
				{errorMessage && (
					<HeroTextField.ErrorMessage key="error" {...errorMessageProps}>
						{errorMessage}
					</HeroTextField.ErrorMessage>
				)}
			</>
		);
	};

	return <HeroTextField {...props}>{renderChildren()}</HeroTextField>;
};

TextFieldComponent.displayName = 'TextField';

/**
 * TextField - Composite component with subcomponents
 * Provides both container and subcomponents for flexible composition
 */
export const TextField = Object.assign(TextFieldComponent, {
	Label: HeroTextField.Label,
	Input: HeroTextField.Input,
	InputStartContent: HeroTextField.InputStartContent,
	InputEndContent: HeroTextField.InputEndContent,
	Description: HeroTextField.Description,
	ErrorMessage: HeroTextField.ErrorMessage,
});

// Re-export subcomponents for convenience
export const TextFieldLabel = HeroTextField.Label;
export const TextFieldInput = HeroTextField.Input;
export const TextFieldInputStartContent = HeroTextField.InputStartContent;
export const TextFieldInputEndContent = HeroTextField.InputEndContent;
export const TextFieldDescription = HeroTextField.Description;
export const TextFieldErrorMessage = HeroTextField.ErrorMessage;

// Re-export types
export type {
	TextFieldDescriptionProps,
	TextFieldErrorMessageProps,
	TextFieldInputEndContentProps,
	TextFieldInputProps,
	TextFieldInputStartContentProps,
	TextFieldLabelProps,
	TextFieldRootProps,
};

export default TextField;
