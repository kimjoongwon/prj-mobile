import type { UnistyleTheme } from './unistyles';

type AppThemes = {
	light: UnistyleTheme;
	dark: UnistyleTheme;
};

type AppBreakpoints = Record<string, number>;

declare module 'react-native-unistyles' {
	export interface UnistylesThemes extends AppThemes {}
	export interface UnistylesBreakpoints extends AppBreakpoints {}
}
