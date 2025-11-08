import { useTheme } from '@/hooks/useTheme';
import {
	DefaultTheme,
	ThemeProvider as RNNavThemeProvider,
} from '@react-navigation/native';
import React, { ReactNode, useEffect } from 'react';
import { useColorScheme } from 'react-native';

interface ThemeProviderProps {
	children: ReactNode;
	initialTheme?: 'light' | 'dark';
}

/**
 * ThemeProvider - Unistyles 기반 테마 제공자
 *
 * 시스템 다크모드 감지와 React Navigation 통합을 제공합니다.
 */
const ThemeProviderContent: React.FC<ThemeProviderProps> = ({
	children,
	initialTheme,
}) => {
	const systemColorScheme = useColorScheme();
	const { theme, isDark, setTheme } = useTheme();

	// 초기 테마 설정
	useEffect(() => {
		if (initialTheme) {
			setTheme(initialTheme);
		} else if (systemColorScheme) {
			setTheme(systemColorScheme === 'dark' ? 'dark' : 'light');
		}
	}, [initialTheme, systemColorScheme, setTheme]);


	return (
		<RNNavThemeProvider
			value={{
				fonts: DefaultTheme.fonts,
				dark: isDark,
				colors: {
					primary: theme.colors.primary.DEFAULT,
					background: theme.colors.background,
					card: theme.colors.content1.DEFAULT,
					text: theme.colors.foreground,
					border: theme.colors.default[200],
					notification: theme.colors.danger.DEFAULT,
				},
			}}
		>
			{children}
		</RNNavThemeProvider>
	);
};

export const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
	return <ThemeProviderContent {...props} />;
};
