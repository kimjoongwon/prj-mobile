/**
 * ListItem Styles using Uniwind
 * Utilities-first approach with theme values
 */

// Size configuration
export const sizes = {
	sm: { height: 56, px: 3, py: 2, imageSize: 32, titleFontSize: 14, descriptionFontSize: 12 },
	md: { height: 72, px: 4, py: 3, imageSize: 48, titleFontSize: 16, descriptionFontSize: 14 },
	lg: { height: 88, px: 5, py: 4, imageSize: 64, titleFontSize: 18, descriptionFontSize: 15 },
} as const;

// Helper function to get container styles
export const getContainerClass = (
	variant: 'default' | 'card' | 'simple',
	size: 'sm' | 'md' | 'lg',
	isSelected: boolean
) => {
	const baseClasses = ['flex', 'flex-row', 'items-center', 'rounded-lg', 'bg-content1'];

	// Size classes
	const sizeClass = {
		sm: 'h-14 px-3 py-2',
		md: 'h-[72px] px-4 py-3',
		lg: 'h-[88px] px-5 py-4',
	}[size];

	// Border classes
	const borderClass = isSelected ? 'border-2 border-primary' : 'border-1.5 border-content3';

	// Variant classes
	const variantClass = {
		default: '',
		card: 'shadow-md bg-transparent',
		simple: 'border-0 rounded-none px-0',
	}[variant];

	const shadowClass = isSelected ? 'shadow-sm shadow-primary/10' : '';

	return `${baseClasses.join(' ')} ${sizeClass} ${borderClass} ${variantClass} ${shadowClass}`;
};

// Helper function to get title styles
export const getTitleClass = (size: 'sm' | 'md' | 'lg') => {
	const sizeClass = {
		sm: 'text-sm',
		md: 'text-base',
		lg: 'text-lg',
	}[size];

	return `font-semibold leading-5 flex-shrink text-foreground ${sizeClass}`;
};

// Helper function to get description styles
export const getDescriptionClass = (size: 'sm' | 'md' | 'lg') => {
	const sizeClass = {
		sm: 'text-xs',
		md: 'text-sm',
		lg: 'text-base',
	}[size];

	return `opacity-80 leading-[18px] flex-shrink text-default-600 ${sizeClass}`;
};

// Helper function to get image container styles
export const getImageContainerClass = (size: 'sm' | 'md' | 'lg') => {
	const sizeClass = {
		sm: 'w-8 h-8',
		md: 'w-12 h-12',
		lg: 'w-16 h-16',
	}[size];

	return `rounded-lg overflow-hidden mr-3 flex-shrink-0 ${sizeClass}`;
};

// Inline styles for properties that can't be expressed in Tailwind
export const inlineStyles = {
	contentWrapper: {
		flex: 1,
		flexDirection: 'row' as const,
		alignItems: 'center' as const,
		minHeight: 0,
	},
	image: {
		width: '100%' as const,
		height: '100%' as const,
		borderRadius: 8,
	},
	textContainer: {
		flex: 1,
		justifyContent: 'center' as const,
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
};
