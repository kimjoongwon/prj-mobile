import React from 'react';
import { View, ViewProps, ViewStyle } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

export interface CardProps extends Omit<ViewProps, 'style'> {
	children?: React.ReactNode;
	style?: ViewStyle;
	padding?: number | 'sm' | 'md' | 'lg';
}

const paddingValues = {
	sm: 'sm',
	md: 'md',
	lg: 'lg',
} as const;

export const Card: React.FC<CardProps> = ({
	children,
	style,
	padding = 'md',
	...props
}) => {
	const { theme } = useTheme();

	// 패딩 값 계산 (unistyles spacing tokens 활용)
	const getPaddingValue = () => {
		if (typeof padding === 'number') return padding;
		const spacingKey = paddingValues[padding];
		const spacingMap: Record<string, number> = {
			sm: theme.spacing[2], // 8
			md: theme.spacing[4], // 16
			lg: theme.spacing[6], // 24
		};
		return spacingMap[spacingKey];
	};

	const cardStyle: ViewStyle = {
		backgroundColor: theme.colors.content1.DEFAULT,
		borderRadius: theme.radius.md,
		padding: getPaddingValue(),
		borderWidth: 1,
		borderColor: theme.colors.content3.DEFAULT,
	};

	return (
		<View style={[cardStyle, style]} {...props}>
			{children}
		</View>
	);
};
