import React from 'react';
import {
	ScrollView as RNScrollView,
	ScrollViewProps as RNScrollViewProps,
} from 'react-native';

export type ScrollViewVariant =
	| 'default'
	| 'content1'
	| 'content2'
	| 'content3'
	| 'content4';

export interface ScrollViewProps extends RNScrollViewProps {
	children?: React.ReactNode;
	variant?: ScrollViewVariant;
	className?: string;
}

export const ScrollView: React.FC<ScrollViewProps> = ({
	children,
	variant = 'default',
	className = '',
	...props
}) => {
	const variantClass = variant === 'default' ? 'bg-background' : `bg-${variant}`;

	return (
		<RNScrollView className={`${variantClass} ${className}`} {...props}>
			{children}
		</RNScrollView>
	);
};
