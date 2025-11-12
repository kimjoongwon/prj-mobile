import React, {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from 'react';
import { useColorScheme } from 'react-native';

export interface ThemeContextType {
	isDark: boolean;
	toggleTheme: () => void;
	setTheme: (mode: 'light' | 'dark') => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
	undefined
);

interface ThemeProviderProps {
	children: ReactNode;
	initialTheme?: 'light' | 'dark';
}

/**
 * ThemeProvider - CSS 변수 기반 테마 제공자
 *
 * 시스템 다크모드 감지와 React Navigation 통합을 제공합니다.
 * globals.css의 @variant light/dark를 기반으로 동작합니다.
 */
const ThemeProviderContent: React.FC<ThemeProviderProps> = ({
	children,
	initialTheme,
}) => {
	const systemColorScheme = useColorScheme();
	const [isDark, setIsDark] = useState(false);

	// 초기 테마 설정
	useEffect(() => {
		let theme: 'light' | 'dark' = 'light';

		if (initialTheme) {
			theme = initialTheme;
		} else if (systemColorScheme) {
			theme = systemColorScheme === 'dark' ? 'dark' : 'light';
		}

		setIsDark(theme === 'dark');

		// Web 환경에서만 HTML 요소에 dark 클래스 적용 (Tailwind @variant dark 지원)
		if (typeof document !== 'undefined') {
			const htmlElement = document.documentElement;
			if (theme === 'dark') {
				htmlElement.classList.add('dark');
			} else {
				htmlElement.classList.remove('dark');
			}
		}
	}, [initialTheme, systemColorScheme]);

	const toggleTheme = () => {
		setIsDark(prev => {
			const newIsDark = !prev;

			// Web 환경에서만 DOM 조작
			if (typeof document !== 'undefined') {
				const htmlElement = document.documentElement;

				if (newIsDark) {
					htmlElement.classList.add('dark');
				} else {
					htmlElement.classList.remove('dark');
				}
			}

			return newIsDark;
		});
	};

	const setTheme = (mode: 'light' | 'dark') => {
		const newIsDark = mode === 'dark';
		setIsDark(newIsDark);

		// Web 환경에서만 DOM 조작
		if (typeof document !== 'undefined') {
			const htmlElement = document.documentElement;
			if (newIsDark) {
				htmlElement.classList.add('dark');
			} else {
				htmlElement.classList.remove('dark');
			}
		}
	};

	// // React Navigation 테마 (CSS 변수 참조)
	// const navTheme: typeof DefaultTheme = {
	// 	...DefaultTheme,
	// 	dark: isDark,
	// 	colors: {
	// 		...DefaultTheme.colors,
	// 		primary: isDark ? '#006fee' : '#006fee',
	// 		background: isDark ? '#000000' : '#ffffff',
	// 		card: isDark ? '#18181b' : '#ffffff',
	// 		text: isDark ? '#ffffff' : '#000000',
	// 		border: isDark ? '#323238' : '#ebebec',
	// 		notification: isDark ? '#f31260' : '#f31260',
	// 	},
	// };

	return (
		<ThemeContext.Provider value={{ isDark, toggleTheme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const ThemeProvider: React.FC<ThemeProviderProps> = props => {
	return <ThemeProviderContent {...props} />;
};

/**
 * useTheme - 테마 상태 및 제어 함수 제공
 * @returns { isDark, toggleTheme, setTheme }
 */
export const useTheme = (): ThemeContextType => {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
};
