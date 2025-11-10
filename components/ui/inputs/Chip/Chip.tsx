import React from 'react';
import { View, type ViewStyle } from 'react-native';
import { Chip as HeroChip } from 'heroui-native';
import { Text } from '../../display/Text';

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
	disabled?: boolean;
	startContent?: React.ReactNode;
	endContent?: React.ReactNode;
	avatar?: React.ReactNode;
	style?: ViewStyle;
	id?: string;
	onLayout?: (event: any) => void;
}

// Map custom variants to heroui-native variants
const mapVariantToHero = (variant: ChipVariant): 'primary' | 'secondary' | 'tertiary' => {
	const variantMap: Record<ChipVariant, 'primary' | 'secondary' | 'tertiary'> = {
		solid: 'primary',
		bordered: 'tertiary',
		light: 'tertiary',
		flat: 'tertiary',
		faded: 'tertiary',
		shadow: 'primary',
	};
	return variantMap[variant] || 'primary';
};

// Map custom sizes to heroui-native sizes
const mapSizeToHero = (size: ChipSize): 'sm' | 'md' | 'lg' => {
	const sizeMap: Record<ChipSize, 'sm' | 'md' | 'lg'> = {
		sm: 'sm',
		md: 'md',
		lg: 'lg',
	};
	return sizeMap[size] || 'md';
};

export const Chip: React.FC<ChipProps> = ({
	children,
	variant = 'solid',
	color = 'default',
	size = 'md',
	radius = 'full',
	disabled = false,
	startContent,
	endContent,
	avatar,
	style,
}) => {
	const heroVariant = mapVariantToHero(variant);
	const heroSize = mapSizeToHero(size);

	const renderStartContent = () => {
		if (avatar) {
			return <View style={{ marginRight: 8 }}>{avatar}</View>;
		}

		if (startContent) {
			return <View style={{ marginRight: 8 }}>{startContent}</View>;
		}

		return null;
	};

	const renderEndContent = () => {
		if (endContent) {
			return <View style={{ marginLeft: 8 }}>{endContent}</View>;
		}

		return null;
	};

	const renderContent = () => {
		return (
			<View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
				{renderStartContent()}
				{children && typeof children === 'string' ? (
					<Text>{children}</Text>
				) : (
					children
				)}
				{renderEndContent()}
			</View>
		);
	};

	return (
		<HeroChip
			variant={heroVariant}
			size={heroSize}
			disabled={disabled}
			style={style}
		>
			{renderContent()}
		</HeroChip>
	);
};

export default Chip;
