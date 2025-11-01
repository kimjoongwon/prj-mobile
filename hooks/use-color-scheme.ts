import { useTheme } from '@/components/contexts/ThemeContext';

/**
 * useColorScheme hook - ThemeProvider 내에서만 사용 가능
 *
 * 사용 예:
 * ```tsx
 * function MyComponent() {
 *   const colorScheme = useColorScheme(); // 'light' | 'dark'
 *   return <View />
 * }
 * ```
 *
 * @returns 'light' | 'dark' | undefined
 */
export const useColorScheme = (): 'light' | 'dark' => {
	const { isDark } = useTheme();
	return isDark ? 'dark' : 'light';
};
