import { StyleSheet } from 'react-native-unistyles';

// ============================================================================
// COLOR SCALES
// ============================================================================

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

// Light Theme Colors
const lightColors = {
	default: {
		50: '#fafafa',
		100: '#f2f2f3',
		200: '#ebebec',
		300: '#e3e3e6',
		400: '#dcdcdf',
		500: '#d4d4d8',
		600: '#afafb2',
		700: '#8a8a8c',
		800: '#656567',
		900: '#404041',
		foreground: '#000',
		DEFAULT: '#d4d4d8',
	},
	primary: {
		50: '#dfedfd',
		100: '#b3d4fa',
		200: '#86bbf7',
		300: '#59a1f4',
		400: '#2d88f1',
		500: '#006fee',
		600: '#005cc4',
		700: '#00489b',
		800: '#003571',
		900: '#002147',
		foreground: '#fff',
		DEFAULT: '#006fee',
	},
	secondary: {
		50: '#eee4f8',
		100: '#d7bfef',
		200: '#bf99e5',
		300: '#a773db',
		400: '#904ed2',
		500: '#7828c8',
		600: '#6321a5',
		700: '#4e1a82',
		800: '#39135f',
		900: '#240c3c',
		foreground: '#fff',
		DEFAULT: '#7828c8',
	},
	success: {
		50: '#e2f8ec',
		100: '#b9efd1',
		200: '#91e5b5',
		300: '#68dc9a',
		400: '#40d27f',
		500: '#17c964',
		600: '#13a653',
		700: '#0f8341',
		800: '#0b5f30',
		900: '#073c1e',
		foreground: '#000',
		DEFAULT: '#17c964',
	},
	warning: {
		50: '#fef4e4',
		100: '#fce4bd',
		200: '#fad497',
		300: '#f9c571',
		400: '#f7b54a',
		500: '#f5a524',
		600: '#ca881e',
		700: '#9f6b17',
		800: '#744e11',
		900: '#4a320b',
		foreground: '#000',
		DEFAULT: '#f5a524',
	},
	danger: {
		50: '#fee1eb',
		100: '#fbb8cf',
		200: '#f98eb3',
		300: '#f76598',
		400: '#f53b7c',
		500: '#f31260',
		600: '#c80f4f',
		700: '#9e0c3e',
		800: '#73092e',
		900: '#49051d',
		foreground: '#000',
		DEFAULT: '#f31260',
	},
	background: '#ffffff',
	foreground: '#000000',
	content1: {
		DEFAULT: '#ffffff',
		foreground: '#000',
	},
	content2: {
		DEFAULT: '#f4f4f5',
		foreground: '#000',
	},
	content3: {
		DEFAULT: '#e4e4e7',
		foreground: '#000',
	},
	content4: {
		DEFAULT: '#d4d4d8',
		foreground: '#000',
	},
	focus: '#006FEE',
	overlay: '#000000',
} as const;

// Dark Theme Colors
const darkColors = {
	default: {
		50: '#0d0d0e',
		100: '#19191c',
		200: '#26262a',
		300: '#323238',
		400: '#3f3f46',
		500: '#65656b',
		600: '#8c8c90',
		700: '#b2b2b5',
		800: '#d9d9da',
		900: '#ffffff',
		foreground: '#fff',
		DEFAULT: '#3f3f46',
	},
	primary: {
		50: '#002147',
		100: '#003571',
		200: '#00489b',
		300: '#005cc4',
		400: '#006fee',
		500: '#2d88f1',
		600: '#59a1f4',
		700: '#86bbf7',
		800: '#b3d4fa',
		900: '#dfedfd',
		foreground: '#fff',
		DEFAULT: '#006fee',
	},
	secondary: {
		50: '#240c3c',
		100: '#39135f',
		200: '#4e1a82',
		300: '#6321a5',
		400: '#7828c8',
		500: '#904ed2',
		600: '#a773db',
		700: '#bf99e5',
		800: '#d7bfef',
		900: '#eee4f8',
		foreground: '#fff',
		DEFAULT: '#7828c8',
	},
	success: {
		50: '#073c1e',
		100: '#0b5f30',
		200: '#0f8341',
		300: '#13a653',
		400: '#17c964',
		500: '#40d27f',
		600: '#68dc9a',
		700: '#91e5b5',
		800: '#b9efd1',
		900: '#e2f8ec',
		foreground: '#000',
		DEFAULT: '#17c964',
	},
	warning: {
		50: '#4a320b',
		100: '#744e11',
		200: '#9f6b17',
		300: '#ca881e',
		400: '#f5a524',
		500: '#f7b54a',
		600: '#f9c571',
		700: '#fad497',
		800: '#fce4bd',
		900: '#fef4e4',
		foreground: '#000',
		DEFAULT: '#f5a524',
	},
	danger: {
		50: '#49051d',
		100: '#73092e',
		200: '#9e0c3e',
		300: '#c80f4f',
		400: '#f31260',
		500: '#f53b7c',
		600: '#f76598',
		700: '#f98eb3',
		800: '#fbb8cf',
		900: '#fee1eb',
		foreground: '#000',
		DEFAULT: '#f31260',
	},
	background: '#000000',
	foreground: '#ffffff',
	content1: {
		DEFAULT: '#18181b',
		foreground: '#fff',
	},
	content2: {
		DEFAULT: '#27272a',
		foreground: '#fff',
	},
	content3: {
		DEFAULT: '#3f3f46',
		foreground: '#fff',
	},
	content4: {
		DEFAULT: '#52525b',
		foreground: '#fff',
	},
	focus: '#006FEE',
	overlay: '#ffffff',
} as const;

// ============================================================================
// DESIGN TOKENS
// ============================================================================

// Spacing tokens (base 4px)
export const spacing = {
	0: 0,
	1: 4,
	2: 8,
	3: 12,
	4: 16,
	5: 20,
	6: 24,
	7: 28,
	8: 32,
	9: 36,
	10: 40,
	12: 48,
	14: 56,
	16: 64,
	20: 80,
	24: 96,
	28: 112,
	32: 128,
} as const;

// Border radius tokens
export const radius = {
	none: 0,
	sm: 4,
	md: 6,
	lg: 8,
	xl: 12,
	'2xl': 16,
	'3xl': 24,
	full: 9999,
} as const;

// Shadow definitions (iOS + Android compatible)
export const shadows = {
	none: {
		shadowColor: 'transparent',
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0,
		shadowRadius: 0,
		elevation: 0,
	},
	sm: {
		shadowColor: '#000000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.1,
		shadowRadius: 1,
		elevation: 2,
	},
	md: {
		shadowColor: '#000000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.15,
		shadowRadius: 3,
		elevation: 4,
	},
	lg: {
		shadowColor: '#000000',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.2,
		shadowRadius: 8,
		elevation: 8,
	},
	xl: {
		shadowColor: '#000000',
		shadowOffset: { width: 0, height: 8 },
		shadowOpacity: 0.25,
		shadowRadius: 12,
		elevation: 12,
	},
} as const;

// Typography tokens
export const typography = {
	h1: {
		fontSize: 32,
		lineHeight: 40,
		letterSpacing: 0,
		fontFamily: 'Pretendard-Bold',
	},
	h2: {
		fontSize: 28,
		lineHeight: 36,
		letterSpacing: 0,
		fontFamily: 'Pretendard-Bold',
	},
	h3: {
		fontSize: 24,
		lineHeight: 32,
		letterSpacing: 0,
		fontFamily: 'Pretendard-SemiBold',
	},
	h4: {
		fontSize: 20,
		lineHeight: 28,
		letterSpacing: 0,
		fontFamily: 'Pretendard-SemiBold',
	},
	h5: {
		fontSize: 18,
		lineHeight: 24,
		letterSpacing: 0,
		fontFamily: 'Pretendard-SemiBold',
	},
	h6: {
		fontSize: 16,
		lineHeight: 22,
		letterSpacing: 0,
		fontFamily: 'Pretendard-SemiBold',
	},
	body1: {
		fontSize: 16,
		lineHeight: 24,
		letterSpacing: 0,
		fontFamily: 'Pretendard-Regular',
	},
	body2: {
		fontSize: 14,
		lineHeight: 20,
		letterSpacing: 0,
		fontFamily: 'Pretendard-Regular',
	},
	caption: {
		fontSize: 12,
		lineHeight: 16,
		letterSpacing: 0,
		fontFamily: 'Pretendard-Regular',
	},
	overline: {
		fontSize: 10,
		lineHeight: 14,
		letterSpacing: 1.5,
		fontFamily: 'Pretendard-Medium',
	},
} as const;

// Font families
export const fonts = {
	thin: 'Pretendard-Thin',
	extraLight: 'Pretendard-ExtraLight',
	light: 'Pretendard-Light',
	regular: 'Pretendard-Regular',
	medium: 'Pretendard-Medium',
	semiBold: 'Pretendard-SemiBold',
	bold: 'Pretendard-Bold',
	extraBold: 'Pretendard-ExtraBold',
	black: 'Pretendard-Black',
} as const;

// Opacity tokens
export const opacity = {
	disabled: 0.5,
	hover: 0.8,
} as const;

// ============================================================================
// THEME DEFINITION & REGISTRATION
// ============================================================================

export interface UnistyleTheme {
	colors: typeof lightColors | typeof darkColors;
	spacing: typeof spacing;
	radius: typeof radius;
	shadows: typeof shadows;
	typography: typeof typography;
	fonts: typeof fonts;
	opacity: typeof opacity;
}

export const lightTheme: UnistyleTheme = {
	colors: lightColors,
	spacing,
	radius,
	shadows,
	typography,
	fonts,
	opacity,
};

export const darkTheme: UnistyleTheme = {
	colors: darkColors,
	spacing,
	radius,
	shadows,
	typography,
	fonts,
	opacity,
};

/**
 * Initialize Unistyles with themes and settings
 * This function should be called at app startup to ensure proper theme configuration
 */
const appThemes = {
	light: lightTheme,
	dark: darkTheme,
} as const;

type Settings = {
	initialTheme: 'light' | 'dark';
};

const settings: Settings = {
	initialTheme: 'light',
};

StyleSheet.configure({
	themes: appThemes,
	settings: settings as any,
	// adaptiveThemes: true,
});
