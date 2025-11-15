import { Surface } from 'heroui-native';
import React from 'react';
import { Text, View, type TextProps, type ViewProps } from 'react-native';

/**
 * Card Component Props
 * Extends Surface component props
 */
export interface CardProps extends React.ComponentProps<typeof Surface> {
	children?: React.ReactNode;
}

/**
 * Card Header Props
 */
export interface CardHeaderProps extends ViewProps {
	children?: React.ReactNode;
}

/**
 * Card Body Props
 */
export interface CardBodyProps extends ViewProps {
	children?: React.ReactNode;
}

/**
 * Card Footer Props
 */
export interface CardFooterProps extends ViewProps {
	children?: React.ReactNode;
}

/**
 * Card Title Props
 */
export interface CardTitleProps extends TextProps {
	children?: React.ReactNode;
}

/**
 * Card Description Props
 */
export interface CardDescriptionProps extends TextProps {
	children?: React.ReactNode;
}

/**
 * Card Component
 * Custom component built on heroui-native Surface
 *
 * This is a stateless component that extends Surface with Card-specific layout.
 * Provides compound components for structured content layout.
 *
 * Features:
 * - Built on Surface component for consistent theming
 * - Flexible layout sections (Header, Body, Footer)
 * - Title and Description subcomponents
 * - Multiple variants (default, secondary, tertiary, quaternary, transparent)
 * - Automatic padding and gap spacing
 *
 * Usage:
 * ```tsx
 * <Card variant="default">
 *   <Card.Header>
 *     <Card.Title>Header Title</Card.Title>
 *   </Card.Header>
 *   <Card.Body>
 *     <Card.Title>Title Text</Card.Title>
 *     <Card.Description>Description text</Card.Description>
 *   </Card.Body>
 *   <Card.Footer>
 *     <Button>Action</Button>
 *   </Card.Footer>
 * </Card>
 * ```
 */
const CardComponent: React.FC<CardProps> = ({
	children,
	className,
	...props
}) => {
	return (
		<Surface className={`gap-0 ${className || ''}`} {...props}>
			{children}
		</Surface>
	);
};

CardComponent.displayName = 'Card';

/**
 * Card.Header Component
 * Header section for top-aligned content like icons or badges
 */
const CardHeader: React.FC<CardHeaderProps> = ({
	children,
	style,
	...props
}) => {
	return (
		<View style={[{ padding: 16 }, style]} {...props}>
			{children}
		</View>
	);
};

CardHeader.displayName = 'Card.Header';

/**
 * Card.Body Component
 * Main content area with flex-1 that expands to fill available space
 */
const CardBody: React.FC<CardBodyProps> = ({ children, style, ...props }) => {
	return (
		<View style={[{ flex: 1, padding: 16 }, style]} {...props}>
			{children}
		</View>
	);
};

CardBody.displayName = 'Card.Body';

/**
 * Card.Footer Component
 * Footer section for bottom-aligned actions like buttons
 */
const CardFooter: React.FC<CardFooterProps> = ({
	children,
	style,
	...props
}) => {
	return (
		<View style={[{ padding: 16 }, style]} {...props}>
			{children}
		</View>
	);
};

CardFooter.displayName = 'Card.Footer';

/**
 * Card.Title Component
 * Title text with foreground color and medium font weight
 */
const CardTitle: React.FC<CardTitleProps> = ({ children, style, ...props }) => {
	return (
		<Text
			style={[
				{
					fontSize: 16,
					fontWeight: '600',
					lineHeight: 24,
				},
				style,
			]}
			className="text-foreground"
			{...props}
		>
			{children}
		</Text>
	);
};

CardTitle.displayName = 'Card.Title';

/**
 * Card.Description Component
 * Description text with muted color and smaller font size
 */
const CardDescription: React.FC<CardDescriptionProps> = ({
	children,
	style,
	...props
}) => {
	return (
		<Text
			style={[
				{
					fontSize: 14,
					lineHeight: 20,
				},
				style,
			]}
			className="text-muted"
			{...props}
		>
			{children}
		</Text>
	);
};

CardDescription.displayName = 'Card.Description';

/**
 * Card - Compound component with subcomponents
 * Exports main Card and all subcomponents
 */
export const Card = Object.assign(CardComponent, {
	Header: CardHeader,
	Body: CardBody,
	Footer: CardFooter,
	Title: CardTitle,
	Description: CardDescription,
});

export default Card;
