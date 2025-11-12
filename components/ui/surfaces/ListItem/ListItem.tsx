import React from 'react';
import { Image, View, ViewStyle } from 'react-native';
import { Text } from '../../display/Text';
import {
	getContainerClass,
	getTitleClass,
	getDescriptionClass,
	inlineStyles,
} from './ListItem.styles';

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
	// STYLE SELECTION - Using Uniwind helper functions
	// Returns class strings that can be used with className or converted to inline styles
	// ════════════════════════════════════════════════════════════════════════════

	// Get class strings from helper functions
	const containerClassName = getContainerClass(variant, size, isSelected);
	const titleClassName = getTitleClass(size);
	const descriptionClassName = getDescriptionClass(size);

	const renderImageOrPlaceholder = () => {
		// showImage가 false이거나 imageUrl이 없으면 아무것도 렌더링하지 않음
		if (!showImage || !imageUrl) return null;

		return (
			<View style={inlineStyles.image}>
				<Image source={{ uri: imageUrl }} style={inlineStyles.image} />
			</View>
		);
	};

	return (
		<View
			style={[inlineStyles.contentWrapper, style]}
			className={containerClassName}
		>
			<View style={inlineStyles.contentWrapper}>
				{startContent && (
					<View style={inlineStyles.startContent}>{startContent}</View>
				)}

				{renderImageOrPlaceholder()}

				<View style={inlineStyles.textContainer}>
					<Text
						className={titleClassName}
						style={{
							marginBottom: description ? 2 : 0, // description이 있을 때만 마진
						}}
						numberOfLines={1}
					>
						{title}
					</Text>
					{description && (
						<Text
							className={descriptionClassName}
							numberOfLines={size === 'sm' ? 1 : 2}
						>
							{description}
						</Text>
					)}
				</View>

				{endContent && (
					<View style={inlineStyles.endContent}>{endContent}</View>
				)}
			</View>
		</View>
	);
};
