/**
 * Chip Styles using Uniwind
 * Utilities-first approach with theme values
 */

// Size configuration
export const sizes = {
	sm: { height: 24, px: 2, fontSize: 12, gap: 1, avatarSize: 16 },
	md: { height: 32, px: 3, fontSize: 14, gap: 1.5, avatarSize: 20 },
	lg: { height: 40, px: 4, fontSize: 16, gap: 2, avatarSize: 24 },
} as const;

// Radius configuration
export const radiusMap = {
	none: 'rounded-none',
	sm: 'rounded-sm',
	md: 'rounded',
	lg: 'rounded-lg',
	full: 'rounded-full',
} as const;

// Helper function to get chip container class
export const getChipClass = (
	variant: 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow',
	color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger',
	size: 'sm' | 'md' | 'lg',
	radius: 'none' | 'sm' | 'md' | 'lg' | 'full',
	isDisabled: boolean
) => {
	const sizeClass = {
		sm: 'h-6 px-2 gap-1',
		md: 'h-8 px-3 gap-1.5',
		lg: 'h-10 px-4 gap-2',
	}[size];

	const radiusClass = radiusMap[radius];
	const disabledClass = isDisabled ? 'opacity-50' : '';
	const shadowClass = variant === 'shadow' ? 'shadow-md' : '';

	// Variant and color combination
	let variantColorClass = '';
	switch (variant) {
		case 'solid':
			variantColorClass = `bg-${color} text-${color}-foreground border-${color}`;
			break;
		case 'bordered':
			variantColorClass = `bg-transparent border-${color} text-${color}`;
			break;
		case 'light':
			variantColorClass = `bg-${color}-100 border-${color}-200 text-${color}-800`;
			break;
		case 'flat':
			variantColorClass = `bg-${color}-100 border-transparent text-${color}-800`;
			break;
		case 'faded':
			variantColorClass = `bg-${color}-50 border-${color}-300 text-${color}-700`;
			break;
		case 'shadow':
			variantColorClass = `bg-${color} text-${color}-foreground border-${color}`;
			break;
		default:
			variantColorClass = `bg-${color} text-${color}-foreground border-${color}`;
	}

	return `flex flex-row items-center border overflow-hidden self-start ${sizeClass} ${radiusClass} ${variantColorClass} ${disabledClass} ${shadowClass}`;
};

// Helper function to get chip text class
export const getChipTextClass = (
	color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger',
	variant: 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow',
	size: 'sm' | 'md' | 'lg'
) => {
	const sizeClass = {
		sm: 'text-xs',
		md: 'text-sm',
		lg: 'text-base',
	}[size];

	// Text color depends on variant
	let textColorClass = '';
	switch (variant) {
		case 'solid':
		case 'shadow':
			textColorClass = `text-${color}-foreground`;
			break;
		case 'bordered':
			textColorClass = `text-${color}`;
			break;
		case 'light':
		case 'flat':
			textColorClass = `text-${color}-800`;
			break;
		case 'faded':
			textColorClass = `text-${color}-700`;
			break;
		default:
			textColorClass = `text-${color}-foreground`;
	}

	return `font-medium ${textColorClass} ${sizeClass}`;
};

// Helper function to get avatar class
export const getAvatarClass = (size: 'sm' | 'md' | 'lg') => {
	const sizeClass = {
		sm: 'w-4 h-4',
		md: 'w-5 h-5',
		lg: 'w-6 h-6',
	}[size];

	return `rounded-full overflow-hidden mr-1.5 ${sizeClass}`;
};

// Inline styles for properties that can't be expressed in Tailwind
export const inlineStyles = {
	chipContent: {
		flexDirection: 'row' as const,
		alignItems: 'center' as const,
	},
	startContent: {
		marginRight: 6,
	},
	endContent: {
		marginLeft: 6,
	},
};
