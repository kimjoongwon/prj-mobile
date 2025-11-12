/**
 * RadioGroup Styles using Uniwind
 * Utilities-first approach with theme values
 */

// Helper function to get container class
export const getContainerClass = (isDisabled: boolean) => {
	return `flex flex-col ${isDisabled ? 'opacity-50' : 'opacity-100'}`;
};

// Helper function to get group container class
export const getGroupContainerClass = (
	orientation: 'horizontal' | 'vertical',
	size: 'sm' | 'md' | 'lg'
) => {
	const sizeClass = {
		sm: 'gap-3',
		md: 'gap-4',
		lg: 'gap-5',
	}[size];

	const directionClass =
		orientation === 'horizontal' ? 'flex-row flex-wrap' : 'flex-col';

	return `flex ${directionClass} ${sizeClass}`;
};

// Helper function to get group label class
export const getGroupLabelClass = (
	size: 'sm' | 'md' | 'lg',
	color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger',
	isInvalid: boolean
) => {
	const sizeClass = {
		sm: 'text-sm',
		md: 'text-base',
		lg: 'text-lg',
	}[size];

	const colorClass = isInvalid ? 'text-danger' : `text-${color}`;

	return `font-semibold mb-2 ${colorClass} ${sizeClass}`;
};

// Helper function to get radio container class
export const getRadioContainerClass = (
	orientation: 'horizontal' | 'vertical'
) => {
	const marginClass = orientation === 'horizontal' ? 'mr-4' : '';
	return `flex flex-row items-center mb-2 ${marginClass}`;
};

// Helper function to get radio button class
export const getRadioClass = (
	size: 'sm' | 'md' | 'lg',
	isSelected: boolean,
	color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger',
	isInvalid: boolean,
	isDisabled: boolean
) => {
	const sizeClass = {
		sm: 'w-4 h-4',
		md: 'w-5 h-5',
		lg: 'w-6 h-6',
	}[size];

	const colorClass = isInvalid
		? 'border-danger'
		: isSelected
			? `border-${color}`
			: 'border-default-400';

	const opacityClass = isDisabled ? 'opacity-50' : 'opacity-100';

	return `flex items-center justify-center border-2 rounded-full bg-transparent ${sizeClass} ${colorClass} ${opacityClass}`;
};

// Helper function to get radio inner dot class
export const getRadioInnerClass = (
	size: 'sm' | 'md' | 'lg',
	color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger',
	isInvalid: boolean
) => {
	const sizeClass = {
		sm: 'w-1.5 h-1.5',
		md: 'w-2 h-2',
		lg: 'w-2.5 h-2.5',
	}[size];

	const colorClass = isInvalid ? 'bg-danger' : `bg-${color}`;

	return `rounded-full ${colorClass} ${sizeClass}`;
};

// Helper function to get option label class
export const getOptionLabelClass = (
	size: 'sm' | 'md' | 'lg',
	isDisabled: boolean
) => {
	const sizeClass = {
		sm: 'text-xs ml-2',
		md: 'text-sm ml-2.5',
		lg: 'text-base ml-3',
	}[size];

	const opacityClass = isDisabled ? 'opacity-50' : 'opacity-100';

	return `font-normal ${sizeClass} ${opacityClass}`;
};

// Helper function to get description text class
export const getDescriptionTextClass = (isError: boolean) => {
	const colorClass = isError ? 'text-danger' : 'text-default-600';
	return `text-xs mt-1 ${colorClass}`;
};

// Inline styles for complex layout properties
export const inlineStyles = {
	labelContainer: {
		flexDirection: 'column' as const,
		flex: 1,
		justifyContent: 'center' as const,
	},
	requiredStar: {
		fontWeight: '600' as const,
	},
	radioContainer: {
		flexDirection: 'row' as const,
		alignItems: 'center' as const,
	},
	radio: {
		flexDirection: 'row' as const,
		alignItems: 'center' as const,
		justifyContent: 'center' as const,
	},
	radioInner: {
		borderRadius: 9999,
	},
};
