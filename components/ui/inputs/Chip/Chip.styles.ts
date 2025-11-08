import { StyleSheet } from 'react-native-unistyles';
import type { UnistyleTheme } from '@/unistyles';

export const createStyles = StyleSheet.create((theme: UnistyleTheme) => ({
	// ════════════════════════════════════════════════════════════════════════════
	// CHIP CONTAINER
	// Accepts all state-affecting parameters directly
	// ════════════════════════════════════════════════════════════════════════════
	chip: (
		variant: 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow',
		color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger',
		size: 'sm' | 'md' | 'lg',
		radius: 'none' | 'sm' | 'md' | 'lg' | 'full',
		isDisabled: boolean,
		customStyle?: Record<string, any>
	) => {
		// Size configuration INSIDE function
		const sizeStyles = {
			sm: { height: 24, paddingHorizontal: 8, fontSize: 12, gap: 4, avatarSize: 16 },
			md: { height: 32, paddingHorizontal: 12, fontSize: 14, gap: 6, avatarSize: 20 },
			lg: { height: 40, paddingHorizontal: 16, fontSize: 16, gap: 8, avatarSize: 24 },
		};

		// Radius configuration INSIDE function
		const radiusValues = {
			none: 0,
			sm: 4,
			md: 6,
			lg: 8,
			full: 999,
		};

		// Color scheme determination INSIDE function
		const colorTokens = theme.colors[color] || theme.colors.default;
		let backgroundColor = 'transparent';
		let borderColor = 'transparent';
		let textColor = theme.colors.foreground;

		switch (variant) {
			case 'solid':
				backgroundColor = colorTokens.DEFAULT;
				borderColor = colorTokens.DEFAULT;
				textColor = colorTokens.foreground;
				break;
			case 'bordered':
				backgroundColor = 'transparent';
				borderColor = colorTokens.DEFAULT;
				textColor = colorTokens.DEFAULT;
				break;
			case 'light':
				backgroundColor = colorTokens[100];
				borderColor = colorTokens[200];
				textColor = colorTokens[800];
				break;
			case 'flat':
				backgroundColor = colorTokens[100];
				borderColor = 'transparent';
				textColor = colorTokens[800];
				break;
			case 'faded':
				backgroundColor = colorTokens[50];
				borderColor = colorTokens[300];
				textColor = colorTokens[700];
				break;
			case 'shadow':
				backgroundColor = colorTokens.DEFAULT;
				borderColor = colorTokens.DEFAULT;
				textColor = colorTokens.foreground;
				break;
			default:
				backgroundColor = colorTokens.DEFAULT;
				borderColor = colorTokens.DEFAULT;
				textColor = colorTokens.foreground;
		}

		// Opacity for disabled state
		const opacity = isDisabled ? theme.opacity.disabled : 1;

		// Shadow for shadow variant
		const shadowStyles = variant === 'shadow'
			? {
					shadowOffset: { width: 0, height: 2 },
					shadowOpacity: 0.1,
					shadowRadius: 4,
					elevation: 2,
				}
			: {};

		return {
			flexDirection: 'row',
			alignItems: 'center',
			borderWidth: 1,
			overflow: 'hidden',
			alignSelf: 'flex-start',
			height: sizeStyles[size].height,
			paddingHorizontal: sizeStyles[size].paddingHorizontal,
			borderRadius: radiusValues[radius],
			backgroundColor,
			borderColor,
			opacity,
			...shadowStyles,
			...customStyle,
		};
	},

	// ════════════════════════════════════════════════════════════════════════════
	// CHIP TEXT
	// Size and color parameters integrated
	// ════════════════════════════════════════════════════════════════════════════
	chipText: (
		color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger',
		variant: 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow',
		size: 'sm' | 'md' | 'lg',
		customStyle?: Record<string, any>
	) => {
		const sizeStyles = {
			sm: { fontSize: 12 },
			md: { fontSize: 14 },
			lg: { fontSize: 16 },
		};

		const colorTokens = theme.colors[color] || theme.colors.default;
		let textColor = theme.colors.foreground;

		switch (variant) {
			case 'solid':
			case 'shadow':
				textColor = colorTokens.foreground;
				break;
			case 'bordered':
				textColor = colorTokens.DEFAULT;
				break;
			case 'light':
			case 'flat':
				textColor = colorTokens[800];
				break;
			case 'faded':
				textColor = colorTokens[700];
				break;
			default:
				textColor = colorTokens.foreground;
		}

		return {
			fontWeight: '500',
			color: textColor,
			...sizeStyles[size],
			...customStyle,
		};
	},

	// ════════════════════════════════════════════════════════════════════════════
	// AVATAR
	// Size parameter integrated
	// ════════════════════════════════════════════════════════════════════════════
	avatar: (size: 'sm' | 'md' | 'lg', customStyle?: Record<string, any>) => {
		const sizeStyles = {
			sm: { width: 16, height: 16 },
			md: { width: 20, height: 20 },
			lg: { width: 24, height: 24 },
		};

		return {
			borderRadius: 999,
			overflow: 'hidden',
			marginRight: 6,
			...sizeStyles[size],
			...customStyle,
		};
	},

	// ════════════════════════════════════════════════════════════════════════════
	// STATIC STYLES (No parameters needed)
	// ════════════════════════════════════════════════════════════════════════════
	chipContent: {
		flexDirection: 'row',
		alignItems: 'center',
	},

	startContent: {
		marginRight: 6,
	},

	endContent: {
		marginLeft: 6,
	},
}));
