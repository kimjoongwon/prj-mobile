import { Card as HeroCard } from 'heroui-native';
import React from 'react';

export interface CardProps extends React.ComponentProps<typeof HeroCard> {
	children?: React.ReactNode;
}

/**
 * Card Component
 * Displays a card container with flexible layout sections for structured content
 *
 * This is a stateless component that wraps heroui-native Card.
 * Card extends Surface component and provides built-in sections for organized content.
 *
 * Features:
 * - Flexible layout sections (Header, Body, Footer)
 * - Title and Description subcomponents
 * - Multiple variants (default, secondary, tertiary, quaternary, transparent)
 * - Horizontal layout support via flex-row
 * - Background image support
 *
 * Anatomy:
 * ```tsx
 * <Card>
 *   <Card.Header>...</Card.Header>
 *   <Card.Body>
 *     <Card.Title>...</Card.Title>
 *     <Card.Description>...</Card.Description>
 *   </Card.Body>
 *   <Card.Footer>...</Card.Footer>
 * </Card>
 * ```
 *
 * Components:
 * - Card: Main container extending Surface component
 * - Card.Header: Header section for top-aligned content
 * - Card.Body: Main content area with flex-1
 * - Card.Title: Title text with foreground color
 * - Card.Description: Description text with muted color
 * - Card.Footer: Footer section for bottom-aligned actions
 */
export const Card = HeroCard;

Card.displayName = 'Card';

export default Card;
