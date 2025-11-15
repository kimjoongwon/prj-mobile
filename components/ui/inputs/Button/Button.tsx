import { Button as HeroButton } from 'heroui-native';
import type { ComponentProps } from 'react';
import React from 'react';

type HeroButtonProps = ComponentProps<typeof HeroButton>;

export interface ButtonProps extends Omit<HeroButtonProps, 'children'> {
	children?: React.ReactNode;
	/** Icon to display before the label */
	startIcon?: React.ReactNode;
	/** Icon to display after the label */
	endIcon?: React.ReactNode;
}

/**
 * Button Component
 * Enhanced wrapper around heroui-native Button with icon support
 *
 * @see https://github.com/heroui-inc/heroui-native/blob/beta/src/components/button/button.md
 *
 * Features:
 * - Automatic Button.Label wrapping for string children
 * - startIcon/endIcon props for convenient icon placement
 * - Full heroui-native Button.Label compound component support
 *
 * Usage:
 * ```tsx
 * // Simple text (auto-wrapped with Button.Label)
 * <Button variant="primary">Click me</Button>
 *
 * // With startIcon
 * <Button variant="primary" startIcon={<Icon name="add" />}>
 *   Add Item
 * </Button>
 *
 * // With endIcon
 * <Button variant="secondary" endIcon={<Icon name="arrow-right" />}>
 *   Next
 * </Button>
 *
 * // Manual composition (advanced)
 * <Button variant="primary">
 *   <Icon name="add" size={20} />
 *   <Button.Label>Add Item</Button.Label>
 * </Button>
 * ```
 */
const ButtonComponent = React.forwardRef<any, ButtonProps>(
	({ startIcon, endIcon, children, ...props }, ref) => {
		// Case 1: startIcon or endIcon props provided
		if (startIcon || endIcon) {
			return (
				<HeroButton ref={ref} {...props}>
					{startIcon}
					{typeof children === 'string' ? (
						<HeroButton.Label>{children}</HeroButton.Label>
					) : (
						children
					)}
					{endIcon}
				</HeroButton>
			);
		}

		// Case 2: String children - auto-wrap with Button.Label
		if (typeof children === 'string') {
			return (
				<HeroButton ref={ref} {...props}>
					<HeroButton.Label>{children}</HeroButton.Label>
				</HeroButton>
			);
		}

		// Case 3: Manual composition - pass through as-is
		return (
			<HeroButton ref={ref} {...props}>
				{children}
			</HeroButton>
		);
	}
);

ButtonComponent.displayName = 'Button';

// Create compound component with Label
export const Button = Object.assign(ButtonComponent, {
	Label: HeroButton.Label,
});

export default Button;
