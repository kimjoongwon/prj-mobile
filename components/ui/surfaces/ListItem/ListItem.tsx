import React from 'react';
import { Image, View, ViewStyle } from 'react-native';
import { Text } from '../../display/Text';
import { createStyles } from './ListItem.styles';

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

	// ════════════════════════════════════════════════════════════════════════════
	// STYLE SELECTION - Direct function calls, NO intermediate variables
	// Pass state flags DIRECTLY to functions
	// ════════════════════════════════════════════════════════════════════════════

	const containerStyle = createStyles.container(variant, size, isSelected, style);
	const titleStyle = createStyles.title(size);
	const descriptionStyle = createStyles.description(size);
	const imageContainerStyle = createStyles.imageContainer(size);

	const renderImageOrPlaceholder = () => {
		// showImage가 false이거나 imageUrl이 없으면 아무것도 렌더링하지 않음
		if (!showImage || !imageUrl) return null;

		return (
			<View style={imageContainerStyle}>
				<Image source={{ uri: imageUrl }} style={createStyles.image} />
			</View>
		);
	};

	return (
		<View style={containerStyle}>
			<View style={createStyles.contentWrapper}>
				{startContent && (
					<View style={createStyles.startContent}>{startContent}</View>
				)}

				{renderImageOrPlaceholder()}

				<View style={createStyles.textContainer}>
					<Text
						style={[
							titleStyle,
							{
								marginBottom: description ? 2 : 0, // description이 있을 때만 마진
							},
						]}
						numberOfLines={1}
					>
						{title}
					</Text>
					{description && (
						<Text
							style={descriptionStyle}
							numberOfLines={size === 'sm' ? 1 : 2}
						>
							{description}
						</Text>
					)}
				</View>

				{endContent && <View style={createStyles.endContent}>{endContent}</View>}
			</View>
		</View>
	);
};
