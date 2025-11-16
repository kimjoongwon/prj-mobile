import { Switch as HeroSwitch } from 'heroui-native';
import type React from 'react';
import type { ComponentProps } from 'react';

type HeroSwitchProps = ComponentProps<typeof HeroSwitch>;

export interface SwitchProps extends HeroSwitchProps {
	children?: React.ReactNode;
}

/**
 * Switch Component
 * A toggle control that allows users to switch between on and off states
 *
 * @see https://github.com/heroui-inc/heroui-native/blob/beta/src/components/switch/switch.md
 *
 * Features:
 * - Customizable thumb with Switch.Thumb
 * - Start and end content support
 * - Animation configuration
 * - FormField integration for larger touch targets
 * - Accessible toggle control
 *
 * Usage:
 * ```tsx
 * // Basic usage
 * <Switch isSelected={isSelected} onSelectedChange={setIsSelected} />
 *
 * // With custom thumb
 * <Switch isSelected={isSelected} onSelectedChange={setIsSelected}>
 *   <Switch.Thumb>
 *     <Icon name="check" />
 *   </Switch.Thumb>
 * </Switch>
 *
 * // With start and end content
 * <Switch isSelected={isSelected} onSelectedChange={setIsSelected}>
 *   <Switch.Thumb />
 *   <Switch.StartContent>
 *     <Icon name="sun" />
 *   </Switch.StartContent>
 *   <Switch.EndContent>
 *     <Icon name="moon" />
 *   </Switch.EndContent>
 * </Switch>
 *
 * // With render function
 * <Switch isSelected={isSelected} onSelectedChange={setIsSelected}>
 *   <Switch.Thumb>
 *     {({ isSelected }) => (
 *       <Icon name={isSelected ? 'check' : 'close'} />
 *     )}
 *   </Switch.Thumb>
 * </Switch>
 * ```
 */
const SwitchComponent: React.FC<SwitchProps> = ({ children, ...props }) => {
	return <HeroSwitch {...props}>{children}</HeroSwitch>;
};

SwitchComponent.displayName = 'Switch';

// Create compound component with all subcomponents
export const Switch = Object.assign(SwitchComponent, {
	Thumb: HeroSwitch.Thumb,
	StartContent: HeroSwitch.StartContent,
	EndContent: HeroSwitch.EndContent,
});

export default Switch;
