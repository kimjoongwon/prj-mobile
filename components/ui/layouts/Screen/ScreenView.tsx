import type React from 'react';
import { StatusBar, View, type ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@/hooks/useTheme';

export interface ScreenViewProps {
	children: React.ReactNode;
	statusBarStyle?: 'light-content' | 'dark-content' | 'auto';
	backgroundColor?: string;
	style?: ViewStyle;
	/** SafeArea 적용 여부 (기본값: true) */
	useSafeArea?: boolean;
	/** SafeArea 개별 제어 */
	safeAreaEdges?: {
		top?: boolean;
		bottom?: boolean;
		left?: boolean;
		right?: boolean;
	};
}

export const ScreenView: React.FC<ScreenViewProps> = ({
	children,
	statusBarStyle = 'auto',
	backgroundColor,
	style,
	useSafeArea = true,
	safeAreaEdges = { top: true, bottom: true, left: true, right: true },
	...props
}) => {
	const { isDark } = useTheme();
	const insets = useSafeAreaInsets();

	const containerBackgroundColor =
		backgroundColor || (isDark ? '#000000' : '#ffffff');

	const getStatusBarStyle = () => {
		if (statusBarStyle === 'auto') {
			return isDark ? 'light-content' : 'dark-content';
		}
		return statusBarStyle;
	};

	// SafeArea insets 적용
	const safeAreaStyle: ViewStyle = useSafeArea
		? {
				paddingTop: safeAreaEdges.top ? insets.top : 0,
				paddingBottom: safeAreaEdges.bottom ? insets.bottom : 0,
				paddingLeft: safeAreaEdges.left ? insets.left : 0,
				paddingRight: safeAreaEdges.right ? insets.right : 0,
			}
		: {};

	return (
		<View
			style={[
				{ flex: 1 },
				{ backgroundColor: containerBackgroundColor },
				safeAreaStyle,
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
