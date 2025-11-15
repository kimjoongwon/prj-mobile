import { Chip as HeroChip } from 'heroui-native';
import type { ComponentProps } from 'react';
import React from 'react';

type HeroChipProps = ComponentProps<typeof HeroChip>;

export interface ChipProps extends Omit<HeroChipProps, 'children'> {
	children?: React.ReactNode;
	/** Icon or content to display before the label */
	startContent?: React.ReactNode;
	/** Icon or content to display after the label */
	endContent?: React.ReactNode;
}

/**
 * Chip Component
 * Enhanced wrapper around heroui-native Chip with icon support
 *
 * @see https://github.com/heroui-inc/heroui-native/blob/beta/src/components/chip/chip.md
 *
 * Features:
 * - Automatic Chip.Label wrapping for string children
 * - startContent/endContent props for convenient icon placement
 * - Full heroui-native Chip.Label compound component support
 *
 * Usage:
 * ```tsx
 * // Simple text (auto-wrapped with Chip.Label)
 * <Chip variant="primary">Featured</Chip>
 *
 * // With startContent
 * <Chip variant="primary" startContent={<Icon name="star" />}>
 *   Featured
 * </Chip>
 *
 * // With endContent
 * <Chip variant="secondary" endContent={<Icon name="close" />}>
 *   Remove
 * </Chip>
 *
 * // Manual composition (advanced)
 * <Chip variant="primary">
 *   <Icon name="star" size={12} />
 *   <Chip.Label>Featured</Chip.Label>
 * </Chip>
 * ```
 */
const ChipComponent = React.forwardRef<any, ChipProps>(
	({ startContent, endContent, children, ...props }, ref) => {
		// Case 1: startContent or endContent props provided
		if (startContent || endContent) {
			return (
				<HeroChip ref={ref} {...props}>
					{startContent}
					{typeof children === 'string' ? (
						<HeroChip.Label>{children}</HeroChip.Label>
					) : (
						children
					)}
					{endContent}
				</HeroChip>
			);
		}

		// Case 2: String children - auto-wrap with Chip.Label
		if (typeof children === 'string') {
			return (
				<HeroChip ref={ref} {...props}>
					<HeroChip.Label>{children}</HeroChip.Label>
				</HeroChip>
			);
		}

		// Case 3: Manual composition - pass through as-is
		return (
			<HeroChip ref={ref} {...props}>
				{children}
			</HeroChip>
		);
	}
);

ChipComponent.displayName = 'Chip';

// Create compound component with Label
export const Chip = Object.assign(ChipComponent, {
	Label: HeroChip.Label,
});

export default Chip;
