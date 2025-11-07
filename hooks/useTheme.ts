import {
	Theme,
	ThemeContext,
	ThemeContextValue,
} from '@/components/provider/ThemeProvider/ThemeProvider';
import { useContext } from 'react';

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
