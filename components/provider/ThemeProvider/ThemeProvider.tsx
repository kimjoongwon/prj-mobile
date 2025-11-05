import {
	DefaultTheme,
	ThemeProvider as RNNavThemeProvider,
} from '@react-navigation/native';
import { observer } from 'mobx-react-lite';
import React, { ReactNode, useCallback, useState, createContext } from 'react';
import { useColorScheme } from 'react-native';
import { darkTheme, lightTheme } from './ThemeProvider.styles';

// 색상 타입 정의
export interface ColorScale {
	50: string;
	100: string;
	200: string;
	300: string;
	400: string;
	500: string;
	600: string;
	700: string;
	800: string;
	900: string;
	foreground: string;
	DEFAULT: string;
}

export interface ContentColor {
	DEFAULT: string;
	foreground: string;
}

export interface ThemeColors {
	default: ColorScale;
	primary: ColorScale;
	secondary: ColorScale;
	success: ColorScale;
	warning: ColorScale;
	danger: ColorScale;
	background: string;
	foreground: string;
	content1: ContentColor;
	content2: ContentColor;
	content3: ContentColor;
	content4: ContentColor;
	focus: string;
	overlay: string;
}

export interface FontFamily {
	thin: string;
	extraLight: string;
	light: string;
	regular: string;
	medium: string;
	semiBold: string;
	bold: string;
	extraBold: string;
	black: string;
}

export interface Theme {
	colors: ThemeColors;
	fonts: FontFamily;
	layout: {
		disabledOpacity: string;
	};
}

export type ThemeMode = 'light' | 'dark';

export interface ThemeContextValue {
	theme: Theme;
	isDark: boolean;
	toggleTheme: () => void;
	setTheme: (mode: ThemeMode) => void;
}

// Theme Context 생성
export const ThemeContext = createContext<ThemeContextValue | undefined>(
	undefined
);

interface ThemeProviderProps {
	children: ReactNode;
	initialTheme?: ThemeMode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = observer(
	({ children, initialTheme }) => {
		const systemColorScheme = useColorScheme();

		// 초기 테마 설정: initialTheme이 있으면 사용, 없으면 시스템 설정을 따름
		const [currentTheme, setCurrentTheme] = useState<ThemeMode>(() => {
			if (initialTheme) return initialTheme;
			return systemColorScheme === 'dark' ? 'dark' : 'light';
		});

		const theme = currentTheme === 'dark' ? darkTheme : lightTheme;
		const isDark = currentTheme === 'dark';

		const toggleTheme = useCallback(() => {
			setCurrentTheme(prev => (prev === 'light' ? 'dark' : 'light'));
		}, []);

		const setTheme = useCallback((mode: ThemeMode) => {
			setCurrentTheme(mode);
		}, []);

		const value: ThemeContextValue = {
			theme,
			isDark,
			toggleTheme,
			setTheme,
		};

		return (
			<ThemeContext.Provider value={value}>
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
			</ThemeContext.Provider>
		);
	}
);
