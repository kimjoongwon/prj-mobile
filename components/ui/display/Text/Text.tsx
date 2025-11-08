import React from 'react';
import {
	Text as RNText,
	TextProps as RNTextProps,
	TextStyle,
} from 'react-native';
import { useTheme } from '@/hooks/useTheme';

export type TextVariant =
	| 'h1'
	| 'h2'
	| 'h3'
	| 'h4'
	| 'h5'
	| 'h6'
	| 'body1'
	| 'body2'
	| 'caption'
	| 'overline';

export type TextColor =
	| 'foreground'
	| 'primary'
	| 'secondary'
	| 'success'
	| 'warning'
	| 'danger'
	| 'default';

export interface TextProps extends Omit<RNTextProps, 'style'> {
	children?: React.ReactNode;
	variant?: TextVariant;
	color?: TextColor;
	style?: TextStyle | TextStyle[];
}

export const Text: React.FC<TextProps> = ({
	children,
	variant = 'body1',
	color = 'foreground',
	style,
	...props
}) => {
	const { theme, isDark } = useTheme();

	// Unistyles typography tokens 기반 타이포그래피
	const getVariantStyle = () => {
		return theme.typography[variant];
	};

	// 테마 기반 색상 가져오기
	const getTextColor = () => {
		switch (color) {
			case 'foreground':
				return theme.colors.foreground;
			case 'primary':
				return theme.colors.primary.DEFAULT;
			case 'secondary':
				return theme.colors.secondary.DEFAULT;
			case 'success':
				return theme.colors.success.DEFAULT;
			case 'warning':
				return theme.colors.warning.DEFAULT;
			case 'danger':
				return theme.colors.danger.DEFAULT;
			case 'default':
				return isDark ? theme.colors.default[400] : theme.colors.default[600];
			default:
				return theme.colors.foreground;
		}
	};

	const textStyle: TextStyle = {
		...getVariantStyle(),
		color: getTextColor(),
	};

	return (
		<RNText style={[textStyle, style]} {...props}>
			{children}
		</RNText>
	);
};
