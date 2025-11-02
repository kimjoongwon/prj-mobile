import { useContext } from 'react';
import { ThemeContext, type ThemeContextValue, type Theme } from '../providers/ThemeProvider/ThemeProvider';

// Re-export Theme type for convenience
export type { Theme };

// useTheme 훅
export const useTheme = (): ThemeContextValue => {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
};
