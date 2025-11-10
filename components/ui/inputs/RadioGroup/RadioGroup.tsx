import { useTheme } from '@/hooks/useTheme';
import type { MobxProps } from '@cocrepo/types';
import React, { useCallback, useState } from 'react';
import {
	Pressable,
	type TextStyle,
	View,
	type ViewProps,
	type ViewStyle,
} from 'react-native';
import Animated, {
	Easing,
	interpolate,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated';
import { Text } from '../../display/Text';
import {
	getContainerClass,
	getGroupContainerClass,
	getGroupLabelClass,
	getRadioContainerClass,
	getRadioClass,
	getRadioInnerClass,
	getOptionLabelClass,
	getDescriptionTextClass,
	inlineStyles,
} from './RadioGroup.styles';

export type RadioGroupSize = 'sm' | 'md' | 'lg';
export type RadioGroupColor =
	| 'default'
	| 'primary'
	| 'secondary'
	| 'success'
	| 'warning'
	| 'danger';
export type RadioGroupOrientation = 'horizontal' | 'vertical';

export interface RadioGroupProps<T = any> extends Omit<ViewProps, 'style'> {
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

	style?: ViewStyle;
	groupStyle?: ViewStyle;
	labelStyle?: TextStyle;
	optionLabelStyle?: TextStyle;
	className?: string;
}

// MobX RadioGroup Props
export interface MobxRadioGroupProps<T, D = any>
	extends MobxProps<T>,
	Omit<RadioGroupProps<D>, 'value' | 'onValueChange'> { }

export interface RadioGroupRef {
	setValue: (value: string) => void;
	getValue: () => string | undefined;
	focus: () => void;
	blur: () => void;
}

export const RadioGroup = <T extends any>({
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
	...props
}: RadioGroupProps<T> &
	React.RefAttributes<RadioGroupRef>): React.ReactElement => {
	const { ref, ...restProps } = props;
	const { theme } = useTheme();
	const [internalValue, setInternalValue] = useState(defaultValue);

	const selectedValue =
		controlledValue !== undefined ? controlledValue : internalValue;

	// ════════════════════════════════════════════════════════════════════════════
	// STYLE SELECTION - Using Uniwind helper functions
	// Returns class strings that can be used with className
	// ════════════════════════════════════════════════════════════════════════════

	const containerClassName = getContainerClass(isDisabled);
	const groupContainerClassName = getGroupContainerClass(orientation, size);
	const groupLabelClassName = getGroupLabelClass(size, color, isInvalid);
	const descriptionClassName = getDescriptionTextClass(false);
	const errorClassName = getDescriptionTextClass(true);

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
		const animatedScale = useSharedValue(1);
		const animatedOpacity = useSharedValue(isSelected ? 1 : 0);

		React.useEffect(() => {
			animatedOpacity.value = withTiming(isSelected ? 1 : 0, {
				duration: 200,
				easing: Easing.bezier(0.4, 0, 0.2, 1),
			});
		}, [isSelected, animatedOpacity]);

		const isOptionDisabled =
			isDisabled || (disabledExtractor?.(item, index) ?? false);

		const handlePress = useCallback(() => {
			if (isOptionDisabled) return;

			animatedScale.value = withTiming(0.95, { duration: 100 }, () => {
				animatedScale.value = withTiming(1, { duration: 100 });
			});

			onPress();
		}, [isOptionDisabled, onPress, animatedScale]);

		const radioAnimatedStyle = useAnimatedStyle(() => {
			return {
				transform: [{ scale: animatedScale.value }],
			};
		});

		const innerRadioAnimatedStyle = useAnimatedStyle(() => {
			return {
				opacity: animatedOpacity.value,
				transform: [
					{
						scale: interpolate(animatedOpacity.value, [0, 1], [0.3, 1]),
					},
				],
			};
		});

		// ════════════════════════════════════════════════════════════════════════════
		// STYLE SELECTION - Direct function calls for RadioOption
		// Pass state flags DIRECTLY to functions
		// ════════════════════════════════════════════════════════════════════════════

		const radioContainerClassName = getRadioContainerClass(orientation);
		const radioClassName = getRadioClass(size, isSelected, color, isInvalid, isOptionDisabled);
		const radioInnerClassName = getRadioInnerClass(size, color, isInvalid);
		const optionLabelClassName = getOptionLabelClass(size, isOptionDisabled);

		return (
			<Pressable
				className={radioContainerClassName}
				style={inlineStyles.radioContainer}
				onPress={handlePress}
				disabled={isOptionDisabled}
				accessibilityRole="radio"
				accessibilityState={{
					checked: isSelected,
					disabled: isOptionDisabled,
				}}
				accessibilityLabel={labelExtractor(item, index)}
			>
				<Animated.View className={radioClassName} style={[inlineStyles.radio, radioAnimatedStyle]}>
					<Animated.View className={radioInnerClassName} style={[inlineStyles.radioInner, innerRadioAnimatedStyle]} />
				</Animated.View>

				<View style={inlineStyles.labelContainer}>
					<Text
						className={optionLabelClassName}
						style={optionLabelStyle}
					>
						{labelExtractor(item, index)}
					</Text>
					{descriptionExtractor?.(item, index) && (
						<Text className={getDescriptionTextClass(false)}>
							{descriptionExtractor(item, index)}
						</Text>
					)}
				</View>
			</Pressable>
		);
	};

	return (
		<View className={containerClassName} style={style} {...restProps}>
			{label && (
				<Text className={groupLabelClassName} style={labelStyle}>
					{label}
					{isRequired && (
						<Text style={[inlineStyles.requiredStar, { color: theme.colors.danger.DEFAULT }]}>
							{' '}
							*
						</Text>
					)}
				</Text>
			)}

			<View className={groupContainerClassName} style={groupStyle}>
				{data.map((item, index) => {
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
				})}
			</View>

			{description && !errorMessage && (
				<Text className={descriptionClassName}>
					{description}
				</Text>
			)}

			{errorMessage && (
				<Text className={errorClassName}>
					{errorMessage}
				</Text>
			)}
		</View>
	);
};

RadioGroup.displayName = 'RadioGroup';

export default RadioGroup;
