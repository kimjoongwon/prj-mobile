import type React from 'react';
import {
	forwardRef,
	useCallback,
	useEffect,
	useImperativeHandle,
	useRef,
	useState,
} from 'react';
import { useTheme } from '@/hooks/useTheme';
import { createStyles } from './Input.styles';

export type InputVariant = 'default' | 'outlined';
export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
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
	inputStyle?: React.CSSProperties;
	labelStyle?: React.CSSProperties;
	onChangeText?: (text: string) => void;
}

export interface InputRef {
	focus: () => void;
	blur: () => void;
	clear: () => void;
	input?: HTMLInputElement | null;
}

/**
 * InputView - Web Implementation (HTML Input)
 * Unistyles 3.0 with Dynamic Functions
 *
 * Architecture:
 * - All styles computed via dynamic functions
 * - Custom styles integrated into functions
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
			value,
			onChangeText,
			onChange,
			inputStyle,
			labelStyle,
			style,
			...props
		},
		ref
	) => {
		const { theme } = useTheme();
		const [isFocused, setIsFocused] = useState(false);
		const [inputValue, setInputValue] = useState(String(value ?? ''));
		const inputRef = useRef<HTMLInputElement>(null);

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
			(e: React.FocusEvent<HTMLInputElement>) => {
				setIsFocused(true);
				props.onFocus?.(e as any);
			},
			[props]
		);

		const handleBlur = useCallback(
			(e: React.FocusEvent<HTMLInputElement>) => {
				setIsFocused(false);
				props.onBlur?.(e as any);
			},
			[props]
		);

		const handleChange = useCallback(
			(e: React.ChangeEvent<HTMLInputElement>) => {
				const newValue = e.target.value;
				setInputValue(newValue);
				onChangeText?.(newValue);
				onChange?.(e);
			},
			[onChangeText, onChange]
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
				input: inputRef.current,
			}),
			[handleClear]
		);

		// ────────────────────────────────────────────────────────────────────
		// STYLE SELECTION - Direct dynamic function calls
		// ────────────────────────────────────────────────────────────────────

		// Call dynamic functions with all parameters integrated
		const fieldContainerStyles = createStyles.fieldContainer(variant, isDisabled, isFocused, isInvalid, size, style);
		const labelStyles = createStyles.label(isInvalid, size, labelStyle);
		const textInputStyles = createStyles.textInput(isDisabled, size, inputStyle);

		// Convert Unistyles values to CSS
		const fieldContainerStyle: React.CSSProperties = {
			display: 'flex',
			alignItems: fieldContainerStyles.alignItems || 'center',
			borderRadius: `${fieldContainerStyles.borderRadius}px`,
			height: `${fieldContainerStyles.height}px`,
			paddingLeft: `${fieldContainerStyles.paddingHorizontal}px`,
			paddingRight: `${fieldContainerStyles.paddingHorizontal}px`,
			backgroundColor: fieldContainerStyles.backgroundColor,
			borderWidth: fieldContainerStyles.borderWidth,
			borderColor: fieldContainerStyles.borderColor || 'transparent',
			opacity: fieldContainerStyles.opacity || 1,
			borderStyle: 'solid',
		};

		const inputTextStyle: React.CSSProperties = {
			flex: 1,
			fontSize: `${textInputStyles.fontSize}px`,
			border: 'none',
			outline: 'none',
			backgroundColor: 'transparent',
			fontFamily: textInputStyles.fontFamily,
			color: textInputStyles.color,
			padding: '0',
		};

		const labelStyle_: React.CSSProperties = {
			fontWeight: labelStyles.fontWeight,
			fontFamily: labelStyles.fontFamily,
			fontSize: `${labelStyles.fontSize}px`,
			marginBottom: `${labelStyles.marginBottom}px`,
			color: labelStyles.color,
		};

		// Size-specific values for clear button
		const clearButtonSize = size === 'sm' ? 16 : size === 'lg' ? 20 : 18;

		// ────────────────────────────────────────────────────────────────────
		// RENDER
		// ────────────────────────────────────────────────────────────────────

		return (
			<div style={{ width: '100%' }}>
				{/* LABEL */}
				{label && (
					<label style={labelStyle_}>
						{label}
						{isRequired && (
							<span style={{ color: theme.colors.danger.DEFAULT }}> *</span>
						)}
					</label>
				)}

				{/* INPUT FIELD */}
				<div style={fieldContainerStyle}>
					{/* START CONTENT */}
					{startContent && (
						<div style={{ marginRight: `${theme.spacing[2]}px` }}>
							{startContent}
						</div>
					)}

					{/* TEXT INPUT */}
					<input
						ref={inputRef}
						{...props}
						type="text"
						style={inputTextStyle}
						value={inputValue}
						onChange={handleChange}
						onFocus={handleFocus}
						onBlur={handleBlur}
						disabled={isDisabled || isReadOnly}
					/>

					{/* CLEAR BUTTON */}
					{isClearable && inputValue.length > 0 && (
						<button
							onClick={handleClear}
							style={{
								padding: `${theme.spacing[1]}px`,
								background: 'none',
								border: 'none',
								cursor: 'pointer',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								fontSize: `${clearButtonSize}px`,
								color: theme.colors.default[400],
							}}
							disabled={isDisabled || isReadOnly}
							aria-label="Clear input"
						>
							✕
						</button>
					)}

					{/* END CONTENT */}
					{endContent && (
						<div style={{ marginLeft: `${theme.spacing[2]}px` }}>
							{endContent}
						</div>
					)}
				</div>

				{/* SUPPORT TEXT */}
				{(description || errorMessage) && (
					<div style={{ marginTop: `${theme.spacing[1]}px` }}>
						{errorMessage && (
							<div
								style={{
									fontSize: '12px',
									lineHeight: '16px',
									fontWeight: '500',
									fontFamily: 'Pretendard-Medium',
									color: theme.colors.danger.DEFAULT,
								}}
							>
								{errorMessage}
							</div>
						)}
						{!errorMessage && description && (
							<div
								style={{
									fontSize: '12px',
									lineHeight: '16px',
									fontFamily: 'Pretendard-Regular',
									color: theme.colors.default[500],
								}}
							>
								{description}
							</div>
						)}
					</div>
				)}
			</div>
		);
	}
);

InputView.displayName = 'InputView';

export default InputView;
