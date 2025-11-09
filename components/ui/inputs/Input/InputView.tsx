import { useTheme } from '@/hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';
import type React from 'react';
import {
	forwardRef,
	useCallback,
	useEffect,
	useImperativeHandle,
	useRef,
	useState,
} from 'react';
import {
	TextInput,
	type TextInputProps,
	type TextStyle,
	TouchableOpacity,
	View,
	type ViewStyle,
} from 'react-native';
import { Text } from '../../display/Text';
import { createStyles } from './Input.styles';

/**
 * Input Component Types
 */
export type InputVariant = 'default' | 'outlined';
export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps extends Omit<TextInputProps, 'style'> {
	variant?: InputVariant;
	size?: InputSize;
	label?: string;
	description?: string;
	errorMessage?: string;
	isRequired?: boolean;
	isDisabled?: boolean;
	isReadOnly?: boolean;
	isInvalid?: boolean;
	isClearable?: boolean;
	startContent?: React.ReactNode;
	endContent?: React.ReactNode;
	style?: ViewStyle;
	inputStyle?: TextStyle;
	labelStyle?: TextStyle;
}

export interface InputRef {
	focus: () => void;
	blur: () => void;
	clear: () => void;
}

/**
 * InputView Component - Unistyles 3.0 with Dynamic Functions
 *
 * Architecture:
 * - All styles computed via dynamic functions
 * - Custom styles integrated into functions
 * - No type casting, no unnecessary wrappers
 */
export const InputView = forwardRef<InputRef, InputProps>(
	(
		{
			variant = 'default',
			size = 'md',
			label,
			description,
			errorMessage,
			isRequired = false,
			isDisabled = false,
			isReadOnly = false,
			isInvalid = false,
			isClearable = false,
			startContent,
			endContent,
			style,
			inputStyle,
			labelStyle,
			value,
			onChangeText,
			placeholder,
			...props
		},
		ref
	) => {
		const { theme } = useTheme();
		const [isFocused, setIsFocused] = useState(false);
		const [inputValue, setInputValue] = useState(String(value ?? ''));
		const inputRef = useRef<TextInput>(null);

		// ────────────────────────────────────────────────────────────────────
		// SYNC EXTERNAL VALUE
		// ────────────────────────────────────────────────────────────────────

		useEffect(() => {
			if (value !== undefined) {
				setInputValue(String(value));
			}
		}, [value]);

		// ────────────────────────────────────────────────────────────────────
		// EVENT HANDLERS
		// ────────────────────────────────────────────────────────────────────

		const handleFocus = useCallback(
			(e: any) => {
				setIsFocused(true);
				props.onFocus?.(e);
			},
			[props]
		);

		const handleBlur = useCallback(
			(e: any) => {
				setIsFocused(false);
				props.onBlur?.(e);
			},
			[props]
		);

		const handleChangeText = useCallback(
			(text: string) => {
				setInputValue(text);
				onChangeText?.(text);
			},
			[onChangeText]
		);

		const handleClear = useCallback(() => {
			setInputValue('');
			onChangeText?.('');
		}, [onChangeText]);

		// ────────────────────────────────────────────────────────────────────
		// REF EXPOSURE
		// ────────────────────────────────────────────────────────────────────

		useImperativeHandle(
			ref,
			() => ({
				focus: () => inputRef.current?.focus(),
				blur: () => inputRef.current?.blur(),
				clear: handleClear,
			}),
			[handleClear]
		);

		// ────────────────────────────────────────────────────────────────────
		// STYLE SELECTION - Direct dynamic function calls
		// ────────────────────────────────────────────────────────────────────

		// Call dynamic functions with all parameters integrated
		const fieldContainerStyle = createStyles.fieldContainer(variant, isDisabled, isFocused, isInvalid, size, style);
		const textInputStyle = createStyles.textInput(isDisabled, size, inputStyle);
		const labelStyle_ = createStyles.label(isInvalid, size, labelStyle);

		// Size-specific values for clearButton
		const clearButtonSize = size === 'sm' ? 16 : size === 'lg' ? 20 : 18;

		// ────────────────────────────────────────────────────────────────────
		// RENDER
		// ────────────────────────────────────────────────────────────────────

		return (
			<View style={createStyles.rootContainer}>
				{/* LABEL */}
				{label && (
					<Text style={labelStyle_}>
						{label}
						{isRequired && <Text style={createStyles.requiredIndicator()}> *</Text>}
					</Text>
				)}

				{/* INPUT FIELD */}
				<TouchableOpacity
					style={fieldContainerStyle}
					onPress={() => {
						if (!isDisabled && !isReadOnly) {
							inputRef.current?.focus();
						}
					}}
					activeOpacity={0.95}
					disabled={isDisabled || isReadOnly}
				>
					{/* START CONTENT */}
					{startContent && (
						<View style={createStyles.startContentContainer()}>{startContent}</View>
					)}

					{/* TEXT INPUT */}
					<TextInput
						ref={inputRef}
						{...props}
						style={textInputStyle}
						value={inputValue}
						onChangeText={handleChangeText}
						onFocus={handleFocus}
						onBlur={handleBlur}
						editable={!isDisabled && !isReadOnly}
						placeholderTextColor={theme.colors.default[400]}
						placeholder={placeholder}
					/>

					{/* CLEAR BUTTON */}
					{isClearable && inputValue.length > 0 && (
						<TouchableOpacity
							onPress={handleClear}
							style={createStyles.clearButtonContainer()}
							disabled={isDisabled || isReadOnly}
						>
							<Ionicons
								name="close-circle"
								size={clearButtonSize}
								color={theme.colors.default[400]}
							/>
						</TouchableOpacity>
					)}

					{/* END CONTENT */}
					{endContent && (
						<View style={createStyles.endContentContainer()}>{endContent}</View>
					)}
				</TouchableOpacity>

				{/* SUPPORT TEXT */}
				{(description || errorMessage) && (
					<View style={createStyles.supportTextContainer()}>
						{errorMessage && <Text style={createStyles.errorText()}>{errorMessage}</Text>}
						{!errorMessage && description && (
							<Text style={createStyles.descriptionText()}>{description}</Text>
						)}
					</View>
				)}
			</View>
		);
	}
);

InputView.displayName = 'InputView';

export default InputView;
