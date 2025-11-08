import { darkTheme, lightTheme, type UnistyleTheme } from '@/unistyles';
import { useCallback, useState } from 'react';
import { UnistylesRuntime } from 'react-native-unistyles';

// Re-export Theme type for convenience
export type Theme = UnistyleTheme;

export interface ThemeContextValue {
	theme: UnistyleTheme;
	isDark: boolean;
	toggleTheme: () => void;
	setTheme: (mode: 'light' | 'dark') => void;
}

/**
 * useTheme 훅 - Unistyles 3.0 기반 테마 시스템
 *
 * UnistylesRuntime을 사용하여 테마 전환 및 상태 관리
 * adaptiveThemes가 활성화되면 자동으로 시스템 다크모드를 감지합니다.
 *
 * @returns 테마 객체, 다크모드 여부, 테마 토글/변경 함수
 *
 * @example
 * ```tsx
 * const { theme, isDark, toggleTheme } = useTheme();
 *
 * // theme 객체로 직접 접근
 * const primaryColor = theme.colors.primary.DEFAULT;
 *
 * // 테마 전환
 * toggleTheme();
 * ```
 */
export const useTheme = (): ThemeContextValue => {
	// UnistylesRuntime.colorScheme을 사용하여 현재 테마 결정
	const currentTheme = (UnistylesRuntime.colorScheme === 'dark' ? 'dark' : 'light') as 'light' | 'dark';

	const [, rerender] = useState({});

	const theme = currentTheme === 'dark' ? darkTheme : lightTheme;
	const isDark = currentTheme === 'dark';

	const toggleTheme = useCallback(() => {
		const newTheme = isDark ? 'light' : 'dark';
		try {
			(UnistylesRuntime.setTheme as Function)(newTheme);
		} catch {
			// setTheme may not be available on all platforms
			console.warn('setTheme not available on this platform');
		}
		// Force re-render to reflect theme change
		rerender({});
	}, [isDark]);

	const setTheme = useCallback((mode: 'light' | 'dark') => {
		try {
			(UnistylesRuntime.setTheme as Function)(mode);
		} catch {
			// setTheme may not be available on all platforms
			console.warn('setTheme not available on this platform');
		}
		// Force re-render to reflect theme change
		rerender({});
	}, []);

	return {
		theme,
		isDark,
		toggleTheme,
		setTheme,
	};
};
