import React from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import { tv } from 'tailwind-variants';

export type TextVariant =
	| 'h1'
	| 'h2'
	| 'h3'
	| 'h4'
	| 'h5'
	| 'h6'
	| 'body1'
	| 'body2'
	| 'caption'
	| 'overline'
	| 'label';

export type TextColor =
	| 'foreground'
	| 'primary'
	| 'secondary'
	| 'success'
	| 'warning'
	| 'danger'
	| 'default';

const textVariants = tv({
	base: 'text-foreground',
	variants: {
		variant: {
			h1: 'text-5xl font-bold',
			h2: 'text-4xl font-bold',
			h3: 'text-3xl font-semibold',
			h4: 'text-2xl font-semibold',
			h5: 'text-xl font-medium',
			h6: 'text-lg font-medium',
			body1: 'text-base',
			body2: 'text-sm',
			caption: 'text-xs',
			overline: 'text-xs uppercase tracking-wider',
			label: 'text-xs font-medium',
		},
		color: {
			foreground: 'text-foreground',
			primary: 'text-primary',
			secondary: 'text-secondary',
			success: 'text-success',
			warning: 'text-warning',
			danger: 'text-danger',
			default: 'text-default-700',
		},
	},
	defaultVariants: {
		variant: 'body1',
		color: 'foreground',
	},
});

export interface TextProps extends RNTextProps {
	children?: React.ReactNode;
	variant?: TextVariant;
	color?: TextColor;
	className?: string;
}

export const Text: React.FC<TextProps> = ({
	children,
	variant = 'body1',
	color = 'foreground',
	className = '',
	...props
}) => {
	return (
		<RNText className={textVariants({ variant, color, className })} {...props}>
			{children}
		</RNText>
	);
};
