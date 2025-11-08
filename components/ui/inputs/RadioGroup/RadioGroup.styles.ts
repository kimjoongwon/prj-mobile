import { StyleSheet } from 'react-native-unistyles';
import type { UnistyleTheme } from '@/unistyles';

export const createStyles = StyleSheet.create((theme: UnistyleTheme) => ({
	// ════════════════════════════════════════════════════════════════════════════
	// CONTAINER
	// Orientation and disabled state parameters integrated
	// ════════════════════════════════════════════════════════════════════════════
	container: (isDisabled: boolean, customStyle?: Record<string, any>) => ({
		flexDirection: 'column',
		opacity: isDisabled ? theme.opacity.disabled : 1,
		...customStyle,
	}),

	// ════════════════════════════════════════════════════════════════════════════
	// GROUP CONTAINER
	// Orientation and size parameters integrated
	// ════════════════════════════════════════════════════════════════════════════
	groupContainer: (
		orientation: 'horizontal' | 'vertical',
		size: 'sm' | 'md' | 'lg',
		customStyle?: Record<string, any>
	) => {
		const sizeStyles = {
			sm: { groupSpacing: 12 },
			md: { groupSpacing: 16 },
			lg: { groupSpacing: 20 },
		};

		const baseStyle = {
			flexDirection: 'column' as const,
		};

		if (orientation === 'horizontal') {
			return {
				...baseStyle,
				flexDirection: 'row' as const,
				flexWrap: 'wrap' as const,
				gap: sizeStyles[size].groupSpacing,
				...customStyle,
			};
		}

		return {
			...baseStyle,
			gap: sizeStyles[size].groupSpacing,
			...customStyle,
		};
	},

	// ════════════════════════════════════════════════════════════════════════════
	// GROUP LABEL
	// Color and size parameters integrated
	// ════════════════════════════════════════════════════════════════════════════
	groupLabel: (
		size: 'sm' | 'md' | 'lg',
		color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger',
		isInvalid: boolean,
		customStyle?: Record<string, any>
	) => {
		const sizeStyles = {
			sm: { fontSize: 14 },
			md: { fontSize: 16 },
			lg: { fontSize: 18 },
		};

		const colorTokens =
			theme.colors[isInvalid ? 'danger' : color] || theme.colors.default;

		return {
			fontWeight: '600' as const,
			marginBottom: theme.spacing[2],
			color: colorTokens.DEFAULT,
			...sizeStyles[size],
			...customStyle,
		};
	},

	// ════════════════════════════════════════════════════════════════════════════
	// RADIO CONTAINER
	// Orientation parameter integrated
	// ════════════════════════════════════════════════════════════════════════════
	radioContainer: (
		orientation: 'horizontal' | 'vertical',
		customStyle?: Record<string, any>
	) => {
		const baseStyle = {
			flexDirection: 'row' as const,
			alignItems: 'center' as const,
			marginBottom: 8,
		};

		if (orientation === 'horizontal') {
			return {
				...baseStyle,
				marginRight: 16,
				marginBottom: 8,
				...customStyle,
			};
		}

		return {
			...baseStyle,
			...customStyle,
		};
	},

	// ════════════════════════════════════════════════════════════════════════════
	// RADIO BUTTON (OUTER CIRCLE)
	// Size, selection state, and color parameters integrated
	// ════════════════════════════════════════════════════════════════════════════
	radio: (
		size: 'sm' | 'md' | 'lg',
		isSelected: boolean,
		color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger',
		isInvalid: boolean,
		isDisabled: boolean,
		customStyle?: Record<string, any>
	) => {
		const sizeStyles = {
			sm: { width: 16, height: 16 },
			md: { width: 20, height: 20 },
			lg: { width: 24, height: 24 },
		};

		const colorTokens =
			theme.colors[isInvalid ? 'danger' : color] || theme.colors.default;
		const borderColor = isSelected ? colorTokens.DEFAULT : theme.colors.default[400];

		return {
			alignItems: 'center' as const,
			justifyContent: 'center' as const,
			borderWidth: 2,
			borderRadius: 50,
			backgroundColor: 'transparent',
			borderColor,
			opacity: isDisabled ? theme.opacity.disabled : 1,
			...sizeStyles[size],
			...customStyle,
		};
	},

	// ════════════════════════════════════════════════════════════════════════════
	// RADIO INNER DOT
	// Size and color parameters integrated
	// ════════════════════════════════════════════════════════════════════════════
	radioInner: (
		size: 'sm' | 'md' | 'lg',
		color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger',
		isInvalid: boolean,
		customStyle?: Record<string, any>
	) => {
		const sizeStyles = {
			sm: { width: 6, height: 6 },
			md: { width: 8, height: 8 },
			lg: { width: 10, height: 10 },
		};

		const colorTokens =
			theme.colors[isInvalid ? 'danger' : color] || theme.colors.default;

		return {
			borderRadius: 50,
			backgroundColor: colorTokens.DEFAULT,
			...sizeStyles[size],
			...customStyle,
		};
	},

	// ════════════════════════════════════════════════════════════════════════════
	// OPTION LABEL
	// Size, disabled state, and color parameters integrated
	// ════════════════════════════════════════════════════════════════════════════
	optionLabel: (
		size: 'sm' | 'md' | 'lg',
		isDisabled: boolean,
		customStyle?: Record<string, any>
	) => {
		const sizeStyles = {
			sm: { fontSize: 12, spacing: 8 },
			md: { fontSize: 14, spacing: 10 },
			lg: { fontSize: 16, spacing: 12 },
		};

		return {
			fontWeight: '400' as const,
			marginLeft: sizeStyles[size].spacing,
			opacity: isDisabled ? theme.opacity.disabled : 1,
			...sizeStyles[size],
			...customStyle,
		};
	},

	// ════════════════════════════════════════════════════════════════════════════
	// DESCRIPTION TEXT
	// Color parameter integrated
	// ════════════════════════════════════════════════════════════════════════════
	descriptionText: (isError: boolean, customStyle?: Record<string, any>) => ({
		fontSize: 12,
		marginTop: theme.spacing[1],
		color: isError ? theme.colors.danger.DEFAULT : theme.colors.default[600],
		...customStyle,
	}),

	// ════════════════════════════════════════════════════════════════════════════
	// STATIC STYLES (No parameters needed)
	// ════════════════════════════════════════════════════════════════════════════
	labelContainer: {
		flexDirection: 'column' as const,
		flex: 1,
		justifyContent: 'center' as const,
	},

	requiredStar: {
		fontWeight: '600' as const,
	},
}));
