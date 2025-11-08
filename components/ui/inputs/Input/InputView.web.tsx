import type React from 'react';
import {
	forwardRef,
	useCallback,
	useEffect,
	useImperativeHandle,
	useMemo,
	useRef,
	useState,
} from 'react';
import { useTheme } from '@/hooks/useTheme';
import { sizes } from './Input.styles';

export type InputVariant = 'flat' | 'bordered' | 'underlined' | 'faded';
export type InputColor =
	| 'default'
	| 'primary'
	| 'secondary'
	| 'success'
	| 'warning'
	| 'danger';
export type InputSize = 'sm' | 'md' | 'lg';
export type LabelPlacement = 'inside' | 'outside' | 'outside-left';

export interface InputProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
	variant?: InputVariant;
	color?: InputColor;
	size?: InputSize;
	label?: string;
	labelPlacement?: LabelPlacement;
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
 * InputView - Web Implementation
 * HTML input를 사용한 웹 전용 구현
 */
export const InputView = forwardRef<InputRef, InputProps>(
	(
		{
			variant = 'flat',
			color = 'default',
			size = 'md',
			label,
			labelPlacement = 'inside',
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
			className,
			...props
		},
		ref
	) => {
		const { theme } = useTheme();
		const [isFocused, setIsFocused] = useState(false);
		const [inputValue, setInputValue] = useState(value?.toString() || '');
		const inputRef = useRef<HTMLInputElement>(null);

		// Sync external value with internal state
		useEffect(() => {
			if (value !== undefined && value?.toString() !== inputValue) {
				setInputValue(value?.toString() || '');
			}
		}, [value, inputValue]);

		// Memoized color scheme for performance
		const colorScheme = useMemo(() => {
			const colorTokens =
				theme.colors[isInvalid ? 'danger' : color] || theme.colors.default;
			const baseBg = theme.colors.default[100];
			const baseLabel = theme.colors.default[600];

			switch (variant) {
				case 'flat':
					return {
						bg: baseBg,
						border: isFocused ? colorTokens.DEFAULT : colorTokens[200],
						text: theme.colors.foreground,
						placeholder: theme.colors.foreground,
						label: baseLabel,
					};
				case 'bordered':
					return {
						bg: baseBg,
						border: isFocused ? colorTokens.DEFAULT : colorTokens[300],
						text: theme.colors.foreground,
						placeholder: colorTokens[400],
						label: baseLabel,
					};
				case 'underlined':
					return {
						bg: baseBg,
						border: isFocused ? colorTokens.DEFAULT : colorTokens[300],
						text: theme.colors.foreground,
						placeholder: colorTokens[400],
						label: baseLabel,
					};
				case 'faded':
					return {
						bg: baseBg,
						border: isFocused ? colorTokens.DEFAULT : colorTokens[200],
						text: theme.colors.foreground,
						placeholder: colorTokens[400],
						label: baseLabel,
					};
				default:
					return {
						bg: baseBg,
						border: colorTokens[300],
						text: theme.colors.foreground,
						placeholder: colorTokens[400],
						label: baseLabel,
					};
			}
		}, [color, variant, isFocused, isInvalid, theme.colors]);

		const sizeConfig = useMemo(() => sizes[size], [size]);

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

		// Expose methods through ref
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

		// Memoized container style
		const containerStyle = useMemo((): React.CSSProperties => {
			const baseStyle: React.CSSProperties = {
				display: 'flex',
				alignItems: 'center',
				height: `${sizeConfig.height}px`,
				paddingLeft: `${sizeConfig.paddingHorizontal}px`,
				paddingRight: `${sizeConfig.paddingHorizontal}px`,
				backgroundColor: colorScheme.bg,
				borderRadius: '6px',
				opacity: isDisabled ? 0.5 : 1,
			};

			switch (variant) {
				case 'bordered':
					return {
						...baseStyle,
						border: `2px solid ${isFocused ? colorScheme.border : '#e4e4e7'}`,
					};
				case 'underlined':
					return {
						...baseStyle,
						borderBottom: `2px solid ${isFocused ? colorScheme.border : '#e4e4e7'}`,
						borderRadius: 0,
					};
				case 'faded':
					return {
						...baseStyle,
						border: `1px solid ${colorScheme.border}`,
					};
				default:
					return baseStyle;
			}
		}, [sizeConfig, colorScheme, isDisabled, variant, isFocused]);

		// Memoized label styles
		const labelStyleMemo = useMemo((): React.CSSProperties => {
			const colorTokens =
				theme.colors[isInvalid ? 'danger' : color] || theme.colors.default;

			const labelColor = isFocused
				? colorTokens[700]
				: theme.colors.default[600];

			const baseStyle: React.CSSProperties = {
				color: labelColor,
				fontSize: `${sizeConfig.labelFontSize}px`,
				fontWeight: '500',
				marginBottom: labelPlacement === 'outside' ? '8px' : undefined,
			};

			if (labelPlacement === 'outside-left') {
				return {
					...baseStyle,
					display: 'flex',
					alignItems: 'center',
					marginRight: '12px',
					minWidth: '100px',
				};
			}

			return baseStyle;
		}, [isFocused, isInvalid, color, theme.colors, labelPlacement, sizeConfig]);

		const inputTextStyle = useMemo((): React.CSSProperties => {
			return {
				flex: 1,
				fontSize: `${sizeConfig.fontSize}px`,
				color: colorScheme.text,
				border: 'none',
				outline: 'none',
				backgroundColor: 'transparent',
				padding:
					labelPlacement === 'outside' && label && (isFocused || inputValue)
						? '16px 0 0 0'
						: '0',
				fontFamily: 'inherit',
			};
		}, [sizeConfig.fontSize, colorScheme.text, labelPlacement, label, isFocused, inputValue]);

		const renderLabel = useCallback(() => {
			if (!label) return null;

			if (labelPlacement === 'outside-left') {
				return (
					<label style={labelStyleMemo}>
						{label}
						{isRequired && <span style={{ color: 'red' }}> *</span>}
					</label>
				);
			}

			if (labelPlacement === 'outside') {
				return (
					<label style={labelStyleMemo}>
						{label}
						{isRequired && <span style={{ color: 'red' }}> *</span>}
					</label>
				);
			}

			// Inside label - placeholder 역할 (outside와 outside-left만 위에서 처리)
			if (labelPlacement === 'inside') {
				if (!isFocused && !inputValue) {
					return (
						<span
							style={{
								...labelStyleMemo,
								pointerEvents: 'none',
								position: 'absolute',
								left: `${sizeConfig.paddingHorizontal + (startContent ? 24 : 0)}px`,
							}}
						>
							{label}
						</span>
					);
				}
			}

			return null;
		}, [
			label,
			labelPlacement,
			labelStyleMemo,
			isRequired,
			isFocused,
			inputValue,
			sizeConfig,
			startContent,
		]);

		if (labelPlacement === 'outside-left') {
			return (
				<div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
					{renderLabel()}
					<div style={{ flex: 1 }}>
						<div style={containerStyle}>
							{startContent && <div style={{ marginRight: '8px' }}>{startContent}</div>}
							<input
								ref={inputRef}
								{...props}
								type="text"
								style={{ ...inputTextStyle, ...inputStyle }}
								value={inputValue}
								onChange={handleChange}
								onFocus={handleFocus}
								onBlur={handleBlur}
								disabled={isDisabled || isReadOnly}
								placeholder={
									labelPlacement === 'outside-left' ? props.placeholder : undefined
								}
							/>
							{isClearable && inputValue.length > 0 && (
								<button
									onClick={handleClear}
									style={{
										background: 'none',
										border: 'none',
										cursor: 'pointer',
										padding: '4px',
										display: 'flex',
										alignItems: 'center',
									}}
									aria-label="Clear input"
								>
									✕
								</button>
							)}
							{endContent && <div style={{ marginLeft: '8px' }}>{endContent}</div>}
						</div>
						{description && !errorMessage && (
							<div style={{ fontSize: '12px', color: '#71717a', marginTop: '4px' }}>
								{description}
							</div>
						)}
						{errorMessage && (
							<div style={{ fontSize: '12px', color: '#ef4444', marginTop: '4px' }}>
								{errorMessage}
							</div>
						)}
					</div>
				</div>
			);
		}

		return (
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				{labelPlacement === 'outside' && renderLabel()}
				<div style={{ position: 'relative', ...containerStyle }}>
					{startContent && <div style={{ marginRight: '8px' }}>{startContent}</div>}
					<input
						ref={inputRef}
						{...props}
						type="text"
						style={{ ...inputTextStyle, ...inputStyle }}
						value={inputValue}
						onChange={handleChange}
						onFocus={handleFocus}
						onBlur={handleBlur}
						disabled={isDisabled || isReadOnly}
						placeholder={labelPlacement === 'outside' ? props.placeholder : undefined}
					/>
					{labelPlacement !== 'outside' && renderLabel()}
					{isClearable && inputValue.length > 0 && (
						<button
							onClick={handleClear}
							style={{
								background: 'none',
								border: 'none',
								cursor: 'pointer',
								padding: '4px',
								display: 'flex',
								alignItems: 'center',
							}}
							aria-label="Clear input"
						>
							✕
						</button>
					)}
					{endContent && <div style={{ marginLeft: '8px' }}>{endContent}</div>}
				</div>
				{description && !errorMessage && (
					<div style={{ fontSize: '12px', color: '#71717a', marginTop: '4px' }}>
						{description}
					</div>
				)}
				{errorMessage && (
					<div style={{ fontSize: '12px', color: '#ef4444', marginTop: '4px' }}>
						{errorMessage}
					</div>
				)}
			</div>
		);
	}
);

InputView.displayName = 'InputView';

export default InputView;
