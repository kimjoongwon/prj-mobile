import { RadioGroup as HeroRadioGroup } from 'heroui-native';
import type { ComponentProps } from 'react';
import React from 'react';

type HeroRadioGroupProps = ComponentProps<typeof HeroRadioGroup>;

export interface RadioGroupProps extends HeroRadioGroupProps {
	children?: React.ReactNode;
}

/**
 * RadioGroup Component
 * Wrapper around heroui-native RadioGroup for consistent API
 *
 * @see https://github.com/heroui-inc/heroui-native/blob/beta/src/components/radio-group/radio-group.md
 *
 * Features:
 * - Full heroui-native RadioGroup compound component support
 * - Controlled and uncontrolled modes
 * - Orientation (horizontal/vertical)
 * - Validation states
 *
 * Usage:
 * ```tsx
 * // Basic usage
 * <RadioGroup label="Select an option">
 *   <RadioGroup.Item value="option1">
 *     <RadioGroup.Label>Option 1</RadioGroup.Label>
 *     <RadioGroup.Indicator />
 *   </RadioGroup.Item>
 *   <RadioGroup.Item value="option2">
 *     <RadioGroup.Label>Option 2</RadioGroup.Label>
 *     <RadioGroup.Indicator />
 *   </RadioGroup.Item>
 * </RadioGroup>
 *
 * // Controlled
 * <RadioGroup value={value} onValueChange={setValue}>
 *   <RadioGroup.Item value="a">
 *     <RadioGroup.Label>Choice A</RadioGroup.Label>
 *     <RadioGroup.Indicator />
 *   </RadioGroup.Item>
 * </RadioGroup>
 *
 * // With descriptions
 * <RadioGroup>
 *   <RadioGroup.Item value="standard">
 *     <RadioGroup.Label>Standard</RadioGroup.Label>
 *     <RadioGroup.Description>2-3 days</RadioGroup.Description>
 *     <RadioGroup.Indicator />
 *   </RadioGroup.Item>
 * </RadioGroup>
 * ```
 */
const RadioGroupComponent = React.forwardRef<any, RadioGroupProps>(
	({ children, ...props }, ref) => {
		return (
			<HeroRadioGroup ref={ref} {...props}>
				{children}
			</HeroRadioGroup>
		);
	}
);

RadioGroupComponent.displayName = 'RadioGroup';

// Create compound component with all sub-components
export const RadioGroup = Object.assign(RadioGroupComponent, {
	Item: HeroRadioGroup.Item,
	Label: HeroRadioGroup.Label,
	Description: HeroRadioGroup.Description,
	Indicator: HeroRadioGroup.Indicator,
	IndicatorThumb: HeroRadioGroup.IndicatorThumb,
	ErrorMessage: HeroRadioGroup.ErrorMessage,
});

export default RadioGroup;
