import { Surface as HeroSurface } from 'heroui-native';
import React from 'react';

export interface SurfaceProps extends React.ComponentProps<typeof HeroSurface> {
	children?: React.ReactNode;
}

/**
 * Surface Component
 * Container component that provides elevation and background styling
 *
 * This is a stateless component that wraps heroui-native Surface.
 * Provides consistent padding and styling with theme integration.
 *
 * Features:
 * - Multiple variants (default, secondary, tertiary, quaternary, transparent)
 * - Consistent background colors and borders
 * - Support for nested surfaces to create visual hierarchy
 * - Custom styling via className or style props
 *
 * Usage:
 * ```tsx
 * <Surface variant="default">
 *   <Text>Surface Content</Text>
 * </Surface>
 * ```
 *
 * Nested Surfaces:
 * ```tsx
 * <Surface variant="default">
 *   <Surface variant="secondary">
 *     <Surface variant="tertiary">
 *       <Surface variant="quaternary">...</Surface>
 *     </Surface>
 *   </Surface>
 * </Surface>
 * ```
 */
export const Surface: React.FC<SurfaceProps> = props => {
	return <HeroSurface {...props} />;
};

Surface.displayName = 'Surface';

export default Surface;
