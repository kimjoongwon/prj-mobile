import type React from 'react';
import {
	StyleSheet,
	type TextStyle,
	View,
	type ViewStyle,
	type PressableProps,
} from 'react-native';
import { Button as HeroButton } from 'heroui-native';
import { Text } from '../../display/Text';

// Custom variant types that match our design system
export type ButtonVariant =
	| 'solid'
	| 'bordered'
	| 'light'
	| 'flat'
	| 'faded'
	| 'shadow'
	| 'ghost';

export type ButtonColor =
	| 'default'
	| 'primary'
	| 'secondary'
	| 'success'
	| 'warning'
	| 'danger';

export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonRadius = 'none' | 'sm' | 'md' | 'lg' | 'full';

export interface ButtonProps extends Omit<PressableProps, 'style'> {
	children?: React.ReactNode;
	variant?: ButtonVariant;
	color?: ButtonColor;
	size?: ButtonSize;
	radius?: ButtonRadius;
	isDisabled?: boolean;
	isLoading?: boolean;
	isIconOnly?: boolean;
	startContent?: React.ReactNode;
	endContent?: React.ReactNode;
	style?: ViewStyle;
	textStyle?: TextStyle;
}

// Size mapping for consistent spacing
const sizes = {
	sm: {
		height: 32,
		paddingHorizontal: 12,
		fontSize: 14,
		iconSize: 16,
	},
	md: {
		height: 40,
		paddingHorizontal: 16,
		fontSize: 14,
		iconSize: 18,
	},
	lg: {
		height: 48,
		paddingHorizontal: 24,
		fontSize: 16,
		iconSize: 20,
	},
};

// Radius mapping
const radiusTheme = {
	none: 0,
	sm: 4,
	md: 6,
	lg: 8,
	xl: 12,
	'2xl': 16,
	'3xl': 24,
	full: 9999,
} as const;

const styles = StyleSheet.create({
	contentContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	iconContainer: {
		alignItems: 'center',
		justifyContent: 'center',
	},
});

// Map custom variants to heroui-native variants
const mapVariantToHero = (variant: ButtonVariant): 'primary' | 'secondary' | 'tertiary' | 'ghost' => {
	const variantMap: Record<ButtonVariant, 'primary' | 'secondary' | 'tertiary' | 'ghost'> = {
		solid: 'primary',
		bordered: 'tertiary',
		light: 'tertiary',
		flat: 'tertiary',
		faded: 'tertiary',
		shadow: 'primary',
		ghost: 'ghost',
	};
	return variantMap[variant] || 'primary';
};

// Map custom sizes to heroui-native sizes
const mapSizeToHero = (size: ButtonSize): 'sm' | 'md' | 'lg' => {
	const sizeMap: Record<ButtonSize, 'sm' | 'md' | 'lg'> = {
		sm: 'sm',
		md: 'md',
		lg: 'lg',
	};
	return sizeMap[size] || 'md';
};

export const Button: React.FC<ButtonProps> = ({
	children,
	variant = 'solid',
	color = 'primary',
	size = 'md',
	radius = 'md',
	isDisabled = false,
	isLoading = false,
	isIconOnly = false,
	startContent,
	endContent,
	style,
	textStyle,
	onPress,
	...props
}) => {
	const heroVariant = mapVariantToHero(variant);
	const heroSize = mapSizeToHero(size);
	const sizeConfig = sizes[size];
	const borderRadius = radiusTheme[radius as keyof typeof radiusTheme];

	// Render content based on loading state
	const renderContent = () => {
		return (
			<View style={styles.contentContainer}>
				{startContent && (
					<View
						style={[styles.iconContainer, { marginRight: children ? 8 : 0 }]}
					>
						{startContent}
					</View>
				)}

				{children && !isIconOnly && (
					<Text style={[{ fontSize: sizeConfig.fontSize }, textStyle || {}]} numberOfLines={1}>
						{children}
					</Text>
				)}

				{endContent && (
					<View
						style={[styles.iconContainer, { marginLeft: children ? 8 : 0 }]}
					>
						{endContent}
					</View>
				)}
			</View>
		);
	};

	return (
		<HeroButton
			variant={heroVariant}
			size={heroSize}
			isDisabled={isDisabled || isLoading}
			onPress={onPress}
			style={[
				{
					height: sizeConfig.height,
					borderRadius,
				},
				style,
			]}
			{...props}
		>
			{renderContent()}
		</HeroButton>
	);
};

export default Button;
