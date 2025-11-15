/**
 * useTheme 훅 - Uniwind 기반 테마 관리
 *
 * Uniwind의 useUniwind hook을 래핑하여 테마 제공
 */

import { appThemes, type UnistyleTheme } from '@/unistyles';
import { Uniwind, useUniwind } from 'uniwind';

export interface ThemeContextValue {
	theme: UnistyleTheme;
	isDark: boolean;
	toggleTheme: () => void;
	setTheme: (mode: 'light' | 'dark') => void;
}

export type Theme = UnistyleTheme;

export const useTheme = (): ThemeContextValue => {
	// Uniwind에서 현재 테마 가져오기
	const { theme: uniwindTheme } = useUniwind();
	const isDark = uniwindTheme === 'dark';

	// 기존 코드 호환성을 위해 unistyles 테마도 제공
	const theme = isDark ? appThemes.dark : appThemes.light;

	const toggleTheme = () => {
		Uniwind.setTheme(isDark ? 'light' : 'dark');
	};

	const setTheme = (mode: 'light' | 'dark') => {
		Uniwind.setTheme(mode);
	};

	return {
		theme,
		isDark,
		toggleTheme,
		setTheme,
	};
};
