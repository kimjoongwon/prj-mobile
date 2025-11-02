import type React from 'react';
import { StatusBar, View, type ViewStyle } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import { styles } from './ScreenContainer.styles';

export interface ScreenContainerViewProps {
	children: React.ReactNode;
	statusBarStyle?: 'light-content' | 'dark-content' | 'auto';
	backgroundColor?: string;
	style?: ViewStyle;
}

export const ScreenContainerView: React.FC<ScreenContainerViewProps> = ({
	children,
	statusBarStyle = 'auto',
	backgroundColor,
	style,
	...props
}) => {
	const { theme, isDark } = useTheme();

	const containerBackgroundColor = backgroundColor || theme.colors.background;

	const getStatusBarStyle = () => {
		if (statusBarStyle === 'auto') {
			return isDark ? 'light-content' : 'dark-content';
		}
		return statusBarStyle;
	};

	return (
		<View
			style={[
				styles.container,
				{ backgroundColor: containerBackgroundColor },
				style,
			]}
			{...props}
		>
			<StatusBar
				barStyle={getStatusBarStyle()}
				backgroundColor={containerBackgroundColor}
			/>
			{children}
		</View>
	);
};
