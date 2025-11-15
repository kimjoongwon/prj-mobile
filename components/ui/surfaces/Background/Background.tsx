import React from 'react';
import { View as RNView, ViewProps as RNViewProps } from 'react-native';

/**
 * Background Component Props
 * Container component with theme-aware background color
 */
export interface BackgroundProps extends RNViewProps {
	children?: React.ReactNode;
	className?: string;
}

/**
 * Background Component
 * A themed container component that applies background color from Uniwind theme
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
	className = '',
	...props
}) => {
	return (
		<RNView className={`bg-background ${className}`} {...props}>
			{children}
		</RNView>
	);
};
