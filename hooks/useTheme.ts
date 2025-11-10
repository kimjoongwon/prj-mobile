/**
 * useTheme 훅 - 테마 및 CSS 변수 기반 테마 제공
 *
 * ThemeProvider의 Context를 사용하여 테마 정보 제공
 * globals.css의 @variant light/dark를 기반으로 동작합니다.
 */

import { useContext } from 'react';
import { appThemes, type UnistyleTheme } from '@/unistyles';
import { ThemeContext } from '@/components/provider/ThemeProvider/ThemeProvider';

export interface ThemeContextValue {
	theme: UnistyleTheme;
	isDark: boolean;
	toggleTheme: () => void;
	setTheme: (mode: 'light' | 'dark') => void;
}

export type Theme = UnistyleTheme;

export const useTheme = (): ThemeContextValue => {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}

	const { isDark, toggleTheme, setTheme } = context;
	const theme = isDark ? appThemes.dark : appThemes.light;

	return {
		theme,
		isDark,
		toggleTheme,
		setTheme,
	};
};
