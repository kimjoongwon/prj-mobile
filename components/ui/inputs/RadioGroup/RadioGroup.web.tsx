import React, { useCallback, useMemo, useState } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { createStyles } from './RadioGroup.styles';

export type RadioGroupSize = 'sm' | 'md' | 'lg';
export type RadioGroupColor =
	| 'default'
	| 'primary'
	| 'secondary'
	| 'success'
	| 'warning'
	| 'danger';
export type RadioGroupOrientation = 'horizontal' | 'vertical';

export interface RadioGroupProps<T = any> {
	data: T[];
	label?: string;
	name?: string;
	value?: any;
	defaultValue?: any;
	size?: RadioGroupSize;
	color?: RadioGroupColor;
	orientation?: RadioGroupOrientation;
	isDisabled?: boolean;
	isRequired?: boolean;
	isInvalid?: boolean;
	description?: string;
	errorMessage?: string;

	// Extractor functions
	keyExtractor: (item: T, index: number) => string;
	labelExtractor: (item: T, index: number) => string;
	valueExtractor: (item: T, index: number) => any;
	descriptionExtractor?: (item: T, index: number) => string;
	disabledExtractor?: (item: T, index: number) => boolean;

	// Callback
	onValueChange?: (value: any, item: T, index: number) => void;

	style?: React.CSSProperties;
	groupStyle?: React.CSSProperties;
	labelStyle?: React.CSSProperties;
	optionLabelStyle?: React.CSSProperties;
	className?: string;
}

export interface RadioGroupRef {
	setValue: (value: string) => void;
	getValue: () => string | undefined;
	focus: () => void;
	blur: () => void;
}

export const RadioGroup = <T = any,>(
	{
		data,
		label,
		name,
		value: controlledValue,
		defaultValue,
		size = 'md',
		color = 'primary',
		orientation = 'vertical',
		isDisabled = false,
		isRequired = false,
		isInvalid = false,
		description,
		errorMessage,
		keyExtractor,
		labelExtractor,
		valueExtractor,
		descriptionExtractor,
		disabledExtractor,
		onValueChange,
		style,
		groupStyle,
		labelStyle,
		optionLabelStyle,
		className,
	}: RadioGroupProps<T>,
	ref: React.Ref<RadioGroupRef>
) => {
	const { theme } = useTheme();
	const [internalValue, setInternalValue] = useState(defaultValue);

	const selectedValue =
		controlledValue !== undefined ? controlledValue : internalValue;

	// ════════════════════════════════════════════════════════════════════════════
	// STYLE SELECTION - Direct function calls, NO intermediate variables
	// Pass state flags DIRECTLY to functions
	// ════════════════════════════════════════════════════════════════════════════

	const containerStyle: React.CSSProperties = {
		display: 'flex',
		flexDirection: 'column',
		opacity: isDisabled ? 0.5 : 1,
		...style,
	};

	const groupContainerStyle: React.CSSProperties = {
		display: 'flex',
		flexDirection: orientation === 'horizontal' ? 'row' : 'column',
		gap: orientation === 'horizontal' ? '16px' : orientation === 'vertical' && size === 'lg' ? '20px' : size === 'md' ? '16px' : '12px',
		flexWrap: orientation === 'horizontal' ? 'wrap' : 'nowrap',
		...groupStyle,
	};

	const labelStyleMemo: React.CSSProperties = {
		fontWeight: '600',
		marginBottom: '8px',
		fontSize: size === 'lg' ? '18px' : size === 'md' ? '16px' : '14px',
		color: theme.colors[isInvalid ? 'danger' : color].DEFAULT,
		...labelStyle,
	};

	const handleValueChange = useCallback(
		(newValue: any, selectedItem: T, selectedIndex: number) => {
			if (controlledValue === undefined) {
				setInternalValue(newValue);
			}

			onValueChange?.(newValue, selectedItem, selectedIndex);
		},
		[controlledValue, onValueChange]
	);

	// Radio option component
	const RadioOption: React.FC<{
		item: T;
		index: number;
		isSelected: boolean;
		onPress: () => void;
	}> = ({ item, index, isSelected, onPress }) => {
		const isOptionDisabled =
			isDisabled || (disabledExtractor?.(item, index) ?? false);

		const radioId = `radio-${name}-${index}`;
		const itemLabel = labelExtractor(item, index);

		// Size dimensions based on size prop
		const sizeMap = {
			sm: { radioSize: 16, iconSize: 6, fontSize: 12, spacing: 8 },
			md: { radioSize: 20, iconSize: 8, fontSize: 14, spacing: 10 },
			lg: { radioSize: 24, iconSize: 10, fontSize: 16, spacing: 12 },
		};
		const sizeDimensions = sizeMap[size];

		// Color values for states
		const colorTokens = theme.colors[isInvalid ? 'danger' : color] || theme.colors.default;
		const labelColor = String(colorTokens.DEFAULT);
		const borderColor = theme.colors.default[400];
		const textColor = theme.colors.foreground;
		const descriptionColor = theme.colors.default[600];

		const radioContainerStyle: React.CSSProperties = {
			display: 'flex',
			alignItems: 'center',
			marginBottom: '8px',
			cursor: isOptionDisabled ? 'not-allowed' : 'pointer',
			opacity: isOptionDisabled ? 0.5 : 1,
		};

		const radioWrapperStyle: React.CSSProperties = {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			width: `${sizeDimensions.radioSize}px`,
			height: `${sizeDimensions.radioSize}px`,
			borderRadius: '50%',
			border: `2px solid ${isSelected ? labelColor : borderColor}`,
			backgroundColor: 'transparent',
			transition: 'all 0.2s ease',
			flexShrink: 0,
		};

		const innerRadioStyle: React.CSSProperties = isSelected
			? {
					width: `${sizeDimensions.iconSize}px`,
					height: `${sizeDimensions.iconSize}px`,
					borderRadius: '50%',
					backgroundColor: labelColor,
					transition: 'all 0.2s ease',
				}
			: {
					width: 0,
					height: 0,
					backgroundColor: labelColor,
					transition: 'all 0.2s ease',
				};

		const labelContainerStyle: React.CSSProperties = {
			display: 'flex',
			flexDirection: 'column',
			marginLeft: `${sizeDimensions.spacing}px`,
			flex: 1,
		};

		const optionLabelStyleMemo: React.CSSProperties = {
			fontSize: `${sizeDimensions.fontSize}px`,
			color: textColor,
			fontWeight: '400',
			...optionLabelStyle,
		};

		const descriptionStyleMemo: React.CSSProperties = {
			fontSize: '12px',
			color: descriptionColor,
			marginTop: '4px',
			opacity: 0.6,
		};

		return (
			<label style={radioContainerStyle}>
				<input
					id={radioId}
					type="radio"
					name={name}
					value={String(valueExtractor(item, index))}
					checked={isSelected}
					onChange={onPress}
					disabled={isOptionDisabled}
					style={{
						display: 'none',
					}}
					aria-label={itemLabel}
				/>
				<div style={radioWrapperStyle}>
					<div style={innerRadioStyle} />
				</div>

				<div style={labelContainerStyle}>
					<label htmlFor={radioId} style={optionLabelStyleMemo}>
						{itemLabel}
					</label>
					{descriptionExtractor?.(item, index) && (
						<div style={descriptionStyleMemo}>
							{descriptionExtractor(item, index)}
						</div>
					)}
				</div>
			</label>
		);
	};

	const renderLabel = useCallback(() => {
		if (!label) return null;

		return (
			<label style={labelStyleMemo}>
				{label}
				{isRequired && (
					<span style={{ color: theme.colors.danger.DEFAULT }}> *</span>
				)}
			</label>
		);
	}, [label, labelStyleMemo, isRequired, theme.colors.danger]);

	const renderOptions = useCallback(() => {
		return data.map((item, index) => {
			const itemKey = keyExtractor(item, index);
			const itemValue = valueExtractor(item, index);
			const isSelected = selectedValue === itemValue;

			return (
				<RadioOption
					key={itemKey}
					item={item}
					index={index}
					isSelected={isSelected}
					onPress={() => handleValueChange(itemValue, item, index)}
				/>
			);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data, keyExtractor, valueExtractor, selectedValue, handleValueChange]);

	const descriptionStyle: React.CSSProperties = {
		fontSize: '12px',
		color: theme.colors.default[600],
		marginTop: '4px',
		opacity: 0.6,
	};

	const errorMessageStyle: React.CSSProperties = {
		fontSize: '12px',
		color: theme.colors.danger.DEFAULT,
		marginTop: '4px',
	};

	// Expose ref methods
	React.useImperativeHandle(
		ref,
		() => ({
			setValue: (newValue: string) => {
				if (controlledValue === undefined) {
					setInternalValue(newValue);
				}
			},
			getValue: () => selectedValue,
			focus: () => {
				// Focus the first radio button
				const firstRadio = document.querySelector(
					`input[name="${name}"]:first-of-type`
				) as HTMLInputElement;
				firstRadio?.focus();
			},
			blur: () => {
				// Blur focused radio button
				const focused = document.querySelector(
					`input[name="${name}"]:focus`
				) as HTMLInputElement;
				focused?.blur();
			},
		}),
		[controlledValue, selectedValue, name]
	);

	return (
		<div style={containerStyle} className={className}>
			{renderLabel()}

			<div style={groupContainerStyle}>{renderOptions()}</div>

			{description && !errorMessage && <div style={descriptionStyle}>{description}</div>}

			{errorMessage && <div style={errorMessageStyle}>{errorMessage}</div>}
		</div>
	);
};

RadioGroup.displayName = 'RadioGroup';

export default RadioGroup;
