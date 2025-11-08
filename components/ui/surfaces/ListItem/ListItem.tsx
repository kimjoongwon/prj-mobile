import React from 'react';
import { Image, View, ViewStyle } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { Text } from '../../display/Text';
import { sizes, styles } from './ListItem.styles';

// Note: ListItem.styles는 기존 StyleSheet 기반이므로 유지함
// Unistyles로의 전체 마이그레이션은 별도 단계에서 진행

export type ListItemVariant = 'default' | 'card' | 'simple';
export type ListItemSize = 'sm' | 'md' | 'lg';

export interface ListItemProps {
	title: string;
	description?: string;
	imageUrl?: string;
	variant?: ListItemVariant;
	size?: ListItemSize;
	showImage?: boolean;
	startContent?: React.ReactNode;
	endContent?: React.ReactNode;
	style?: ViewStyle;
	isSelected?: boolean;
}

export const ListItem: React.FC<ListItemProps> = props => {
	const {
		title,
		description,
		imageUrl,
		variant = 'default',
		size = 'md',
		showImage = true,
		startContent,
		endContent,
		style,
		isSelected = false,
	} = props;
	const { theme } = useTheme();
	const sizeConfig = sizes[size];

	const renderImageOrPlaceholder = () => {
		// showImage가 false이거나 imageUrl이 없으면 아무것도 렌더링하지 않음
		if (!showImage || !imageUrl) return null;

		const imageStyle = {
			width: sizeConfig.imageSize,
			height: sizeConfig.imageSize,
		};

		return (
			<View style={[styles.imageContainer, imageStyle]}>
				<Image source={{ uri: imageUrl }} style={styles.image} />
			</View>
		);
	};

	const containerStyle: ViewStyle = {
		...styles.container,
		minHeight: sizeConfig.height,
		paddingHorizontal: sizeConfig.paddingHorizontal,
		paddingVertical: sizeConfig.paddingVertical,
		...(variant === 'card' && styles.cardVariant),
		...(variant === 'simple' && styles.simpleVariant),
		backgroundColor: theme.colors.content1.DEFAULT,
		borderColor: isSelected
			? theme.colors.primary.DEFAULT
			: theme.colors.content3.DEFAULT,
		borderWidth: isSelected ? 2 : 1.5,
		...(isSelected && {
			shadowColor: theme.colors.primary.DEFAULT,
			shadowOffset: { width: 0, height: 2 },
			shadowOpacity: 0.1,
			shadowRadius: 4,
			elevation: 3,
		}),
	};

	return (
		<View style={[containerStyle, style]}>
			<View style={styles.contentWrapper}>
				{startContent && (
					<View style={styles.startContent}>{startContent}</View>
				)}

				{renderImageOrPlaceholder()}

				<View style={styles.textContainer}>
					<Text
						style={[
							styles.title,
							{
								color: theme.colors.foreground,
								fontSize: sizeConfig.titleFontSize,
								marginBottom: description ? 2 : 0, // description이 있을 때만 마진
							},
						]}
						numberOfLines={1}
					>
						{title}
					</Text>
					{description && (
						<Text
							style={[
								styles.description,
								{
									color: theme.colors.default[600],
									fontSize: sizeConfig.descriptionFontSize,
								},
							]}
							numberOfLines={size === 'sm' ? 1 : 2}
						>
							{description}
						</Text>
					)}
				</View>

				{endContent && <View style={styles.endContent}>{endContent}</View>}
			</View>
		</View>
	);
};
