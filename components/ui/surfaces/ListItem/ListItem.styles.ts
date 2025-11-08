import { StyleSheet } from 'react-native-unistyles';
import type { UnistyleTheme } from '@/unistyles';

export const createStyles = StyleSheet.create((theme: UnistyleTheme) => ({
	// ════════════════════════════════════════════════════════════════════════════
	// CONTAINER
	// Variant, size, selection state, and theme parameters integrated
	// ════════════════════════════════════════════════════════════════════════════
	container: (
		variant: 'default' | 'card' | 'simple',
		size: 'sm' | 'md' | 'lg',
		isSelected: boolean,
		customStyle?: Record<string, any>
	) => {
		// Size configuration INSIDE function
		const sizeStyles = {
			sm: { height: 56, paddingHorizontal: 12, paddingVertical: 8, imageSize: 32, titleFontSize: 14, descriptionFontSize: 12 },
			md: { height: 72, paddingHorizontal: 16, paddingVertical: 12, imageSize: 48, titleFontSize: 16, descriptionFontSize: 14 },
			lg: { height: 88, paddingHorizontal: 20, paddingVertical: 16, imageSize: 64, titleFontSize: 18, descriptionFontSize: 15 },
		};

		// Variant-specific styles
		let variantStyles = {};
		if (variant === 'card') {
			variantStyles = {
				backgroundColor: 'transparent',
				shadowOffset: { width: 0, height: 2 },
				shadowOpacity: 0.1,
				shadowRadius: 8,
				elevation: 3,
			};
		} else if (variant === 'simple') {
			variantStyles = {
				borderWidth: 0,
				borderRadius: 0,
				paddingHorizontal: 0,
			};
		}

		// Selection-specific styles
		const shadowStyles = isSelected
			? {
					shadowColor: theme.colors.primary.DEFAULT,
					shadowOffset: { width: 0, height: 2 },
					shadowOpacity: 0.1,
					shadowRadius: 4,
					elevation: 3,
				}
			: {};

		return {
			flexDirection: 'row' as const,
			alignItems: 'center',
			borderRadius: 12,
			borderWidth: isSelected ? 2 : 1.5,
			backgroundColor: theme.colors.content1.DEFAULT,
			borderColor: isSelected
				? theme.colors.primary.DEFAULT
				: theme.colors.content3.DEFAULT,
			minHeight: sizeStyles[size].height,
			paddingHorizontal: sizeStyles[size].paddingHorizontal,
			paddingVertical: sizeStyles[size].paddingVertical,
			...variantStyles,
			...shadowStyles,
			...customStyle,
		};
	},

	// ════════════════════════════════════════════════════════════════════════════
	// TITLE
	// Size parameter integrated
	// ════════════════════════════════════════════════════════════════════════════
	title: (size: 'sm' | 'md' | 'lg', customStyle?: Record<string, any>) => {
		const sizeStyles = {
			sm: { fontSize: 14 },
			md: { fontSize: 16 },
			lg: { fontSize: 18 },
		};

		return {
			fontWeight: '600' as const,
			lineHeight: 20,
			flexShrink: 1,
			color: theme.colors.foreground,
			...sizeStyles[size],
			...customStyle,
		};
	},

	// ════════════════════════════════════════════════════════════════════════════
	// DESCRIPTION
	// Size parameter integrated
	// ════════════════════════════════════════════════════════════════════════════
	description: (size: 'sm' | 'md' | 'lg', customStyle?: Record<string, any>) => {
		const sizeStyles = {
			sm: { fontSize: 12 },
			md: { fontSize: 14 },
			lg: { fontSize: 15 },
		};

		return {
			opacity: 0.8,
			lineHeight: 18,
			flexShrink: 1,
			color: theme.colors.default[600],
			...sizeStyles[size],
			...customStyle,
		};
	},

	// ════════════════════════════════════════════════════════════════════════════
	// IMAGE CONTAINER
	// Size parameter integrated
	// ════════════════════════════════════════════════════════════════════════════
	imageContainer: (size: 'sm' | 'md' | 'lg', customStyle?: Record<string, any>) => {
		const sizeStyles = {
			sm: { width: 32, height: 32 },
			md: { width: 48, height: 48 },
			lg: { width: 64, height: 64 },
		};

		return {
			borderRadius: 8,
			overflow: 'hidden' as const,
			marginRight: 12,
			flexShrink: 0,
			...sizeStyles[size],
			...customStyle,
		};
	},

	// ════════════════════════════════════════════════════════════════════════════
	// STATIC STYLES (No parameters needed)
	// ════════════════════════════════════════════════════════════════════════════
	contentWrapper: {
		flex: 1,
		flexDirection: 'row' as const,
		alignItems: 'center',
		minHeight: 0,
	},

	image: {
		width: '100%',
		height: '100%',
		borderRadius: 8,
	},

	textContainer: {
		flex: 1,
		justifyContent: 'center',
		minHeight: 0,
		minWidth: 0,
	},

	startContent: {
		marginRight: 12,
		flexShrink: 0,
	},

	endContent: {
		marginLeft: 12,
		flexShrink: 0,
	},
}));
