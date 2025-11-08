import React from 'react';
import { View, type ViewStyle } from 'react-native';
import { Text } from '../../display/Text';
import { createStyles } from './Chip.styles';

export type ChipVariant =
	| 'solid'
	| 'bordered'
	| 'light'
	| 'flat'
	| 'faded'
	| 'shadow';
export type ChipColor =
	| 'default'
	| 'primary'
	| 'secondary'
	| 'success'
	| 'warning'
	| 'danger';
export type ChipSize = 'sm' | 'md' | 'lg';
export type ChipRadius = 'none' | 'sm' | 'md' | 'lg' | 'full';

export interface ChipProps {
	children?: React.ReactNode;
	variant?: ChipVariant;
	color?: ChipColor;
	size?: ChipSize;
	radius?: ChipRadius;
	isDisabled?: boolean;
	startContent?: React.ReactNode;
	endContent?: React.ReactNode;
	avatar?: React.ReactNode;
	style?: ViewStyle;
}

export const Chip: React.FC<ChipProps> = ({
	children,
	variant = 'solid',
	color = 'default',
	size = 'md',
	radius = 'full',
	isDisabled = false,
	startContent,
	endContent,
	avatar,
	style,
}) => {
	// ════════════════════════════════════════════════════════════════════════════
	// STYLE SELECTION - Direct function calls, NO intermediate variables
	// Pass state flags DIRECTLY to functions
	// ════════════════════════════════════════════════════════════════════════════

	const chipContainerStyle = createStyles.chip(variant, color, size, radius, isDisabled, style);
	const chipTextStyle = createStyles.chipText(color, variant, size);
	const avatarStyle = createStyles.avatar(size);

	const renderStartContent = () => {
		if (avatar) {
			return <View style={avatarStyle}>{avatar}</View>;
		}

		if (startContent) {
			return <View style={createStyles.startContent}>{startContent}</View>;
		}

		return null;
	};

	const renderEndContent = () => {
		if (endContent) {
			return <View style={createStyles.endContent}>{endContent}</View>;
		}

		return null;
	};

	return (
		<View style={chipContainerStyle}>
			{renderStartContent()}

			<Text style={chipTextStyle} numberOfLines={1}>
				{children}
			</Text>

			{renderEndContent()}
		</View>
	);
};
