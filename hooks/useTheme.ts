import { type UnistyleTheme } from '@/unistyles';
import { useCallback } from 'react';
import { UnistylesRuntime, useUnistyles } from 'react-native-unistyles';

// Re-export Theme type for convenience
export type Theme = UnistyleTheme;

export interface ThemeContextValue {
	theme: UnistyleTheme;
	isDark: boolean;
	toggleTheme: () => void;
	setTheme: (mode: 'light' | 'dark') => void;
}

export const useTheme = (): ThemeContextValue => {
	// useUnistyles automatically subscribes to theme changes
	const { theme } = useUnistyles();
	const isDark = UnistylesRuntime.themeName === 'dark';

	const toggleTheme = useCallback(() => {
		// Get current theme at the time of toggle, not from closure
		const currentTheme = UnistylesRuntime.themeName;
		const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
		(UnistylesRuntime.setTheme as (theme: 'light' | 'dark') => void)(newTheme);
	}, []);

	const setTheme = useCallback((mode: 'light' | 'dark') => {
		(UnistylesRuntime.setTheme as (theme: 'light' | 'dark') => void)(mode);
	}, []);

	return {
		theme,
		isDark,
		toggleTheme,
		setTheme,
	};
};
