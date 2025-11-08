import { StyleSheet } from 'react-native-unistyles';
import type { UnistyleTheme } from '@/unistyles';

/**
 * Input Component Styles - Unistyles 3.0
 *
 * Architecture:
 * - Only 'outlined' and 'default' variants
 * - Label placement: 'outside' only
 * - No animations
 * - All styles via dynamic functions
 * - Full Unistyles 3.0 integration
 */

// ============================================================================
// CREATE STYLES - UNISTYLES 3.0 WITH DYNAMIC FUNCTIONS
// ============================================================================

/**
 * Creates all themed styles for Input component
 * Uses Unistyles 3.0 dynamic functions for parameter-based style computation
 * No unnecessary abstraction - all styling logic in StyleSheet.create
 */
export const createStyles = StyleSheet.create((theme: UnistyleTheme) => ({
	// ════════════════════════════════════════════════════════════════════════════
	// ROOT CONTAINER
	// ════════════════════════════════════════════════════════════════════════════
	rootContainer: {
		width: '100%',
	},

	// ════════════════════════════════════════════════════════════════════════════
	// LABEL - Dynamic function with isInvalid, size, and custom style override
	// ════════════════════════════════════════════════════════════════════════════
	label: (isInvalid: boolean, size: 'sm' | 'md' | 'lg', customStyle?: Record<string, any>) => {
		const sizeStyles = {
			sm: { fontSize: 12 },
			md: { fontSize: 13 },
			lg: { fontSize: 14 },
		};

		return {
			fontWeight: '500',
			fontFamily: 'Pretendard-Medium',
			marginBottom: theme.spacing[1],
			color: isInvalid ? theme.colors.danger.DEFAULT : theme.colors.default[600],
			...sizeStyles[size],
			...customStyle,
		};
	},

	requiredIndicator: {
		fontWeight: '600',
		color: theme.colors.danger.DEFAULT,
	},

	// ════════════════════════════════════════════════════════════════════════════
	// INPUT FIELD CONTAINER
	// Dynamic function with variant, state flags, size, and custom style override
	// ════════════════════════════════════════════════════════════════════════════
	fieldContainer: (
		variant: 'default' | 'outlined',
		isDisabled: boolean,
		isFocused: boolean,
		isInvalid: boolean,
		size: 'sm' | 'md' | 'lg',
		customStyle?: Record<string, any>
	) => {
		const isOutlined = variant === 'outlined';

		// Size configuration
		const sizeStyles = {
			sm: { height: 44, paddingHorizontal: 12 },
			md: { height: 48, paddingHorizontal: 12 },
			lg: { height: 52, paddingHorizontal: 16 },
		};

		// Determine border color based on variant and state flags
		let borderColor = 'transparent';
		if (isOutlined) {
			if (isFocused) {
				borderColor = theme.colors.primary.DEFAULT;
			} else if (isInvalid) {
				borderColor = theme.colors.danger.DEFAULT;
			} else {
				borderColor = theme.colors.default[200];
			}
		}

		return {
			flexDirection: 'row',
			alignItems: 'center',
			borderRadius: theme.radius.md,
			backgroundColor: isOutlined ? theme.colors.background : theme.colors.content1.DEFAULT,
			borderWidth: isOutlined ? 1 : 0,
			borderColor,
			opacity: isDisabled ? theme.opacity.disabled : 1,
			...sizeStyles[size],
			...customStyle,
		};
	},

	// ════════════════════════════════════════════════════════════════════════════
	// TEXT INPUT
	// Dynamic function with isDisabled, size, and custom style override
	// ════════════════════════════════════════════════════════════════════════════
	textInput: (isDisabled: boolean, size: 'sm' | 'md' | 'lg', customStyle?: Record<string, any>) => {
		const sizeStyles = {
			sm: { fontSize: 14 },
			md: { fontSize: 15 },
			lg: { fontSize: 16 },
		};

		return {
			flex: 1,
			fontFamily: 'Pretendard-Regular',
			color: isDisabled ? theme.colors.default[400] : theme.colors.foreground,
			...sizeStyles[size],
			...customStyle,
		};
	},

	// ════════════════════════════════════════════════════════════════════════════
	// CONTENT CONTAINERS
	// ════════════════════════════════════════════════════════════════════════════
	startContentContainer: {
		marginRight: theme.spacing[2],
		justifyContent: 'center',
		alignItems: 'center',
	},

	clearButtonContainer: {
		padding: theme.spacing[1],
		justifyContent: 'center',
		alignItems: 'center',
	},

	endContentContainer: {
		marginLeft: theme.spacing[2],
		justifyContent: 'center',
		alignItems: 'center',
	},

	// ════════════════════════════════════════════════════════════════════════════
	// SUPPORT TEXT
	// ════════════════════════════════════════════════════════════════════════════
	supportTextContainer: {
		marginTop: theme.spacing[1],
	},

	descriptionText: {
		fontSize: 12,
		lineHeight: 16,
		fontFamily: 'Pretendard-Regular',
		color: theme.colors.default[500],
	},

	errorText: {
		fontSize: 12,
		lineHeight: 16,
		fontWeight: '500',
		fontFamily: 'Pretendard-Medium',
		color: theme.colors.danger.DEFAULT,
	},
}));
