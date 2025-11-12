import { useTheme } from '@/hooks/useTheme';
import React from 'react';
import { View as RNView, ViewProps as RNViewProps } from 'react-native';

/**
 * Background Component Props
 * Container component with theme-aware background color
 */
export interface BackgroundProps extends RNViewProps {
	children?: React.ReactNode;
}

/**
 * Background Component
 * A themed container component that applies background color from the current theme
 *
 * Usage:
 * ```tsx
 * <Background style={{ padding: 16, gap: 20 }}>
 *   <Text>Content</Text>
 * </Background>
 * ```
 */
export const Background: React.FC<BackgroundProps> = ({
	children,
	style,
	...props
}) => {
	const { theme } = useTheme();

	return (
		<RNView
			style={[{ backgroundColor: theme.colors.background }, style]}
			{...props}
		>
			{children}
		</RNView>
	);
};
