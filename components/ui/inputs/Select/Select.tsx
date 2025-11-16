import { Select as HeroSelect } from 'heroui-native';
import type React from 'react';
import type { ComponentProps } from 'react';
import { StyleSheet } from 'react-native';

type HeroSelectProps = ComponentProps<typeof HeroSelect>;

export interface SelectProps extends HeroSelectProps {
	children?: React.ReactNode;
}

/**
 * Select Component
 * Wrapper around heroui-native Select for dropdown selection interfaces
 *
 * @see https://github.com/heroui-inc/heroui-native/blob/beta/src/components/select/select.md
 *
 * Features:
 * - Full heroui-native Select compound component support
 * - Bottom sheet presentation for mobile
 * - Dialog presentation for larger screens
 * - Controlled and uncontrolled modes
 * - Keyboard navigation support
 *
 * Usage:
 * ```tsx
 * // Basic usage
 * <Select>
 *   <Select.Trigger>
 *     <Select.Value placeholder="Choose an option" />
 *   </Select.Trigger>
 *   <Select.Portal>
 *     <Select.Overlay />
 *     <Select.Content>
 *       <Select.Item value="apple" label="Apple" />
 *       <Select.Item value="orange" label="Orange" />
 *     </Select.Content>
 *   </Select.Portal>
 * </Select>
 *
 * // Controlled mode
 * <Select value={value} onValueChange={setValue}>
 *   <Select.Trigger>
 *     <Select.Value placeholder="Select fruit" />
 *   </Select.Trigger>
 *   <Select.Portal>
 *     <Select.Overlay />
 *     <Select.Content>
 *       <Select.Item value="apple" label="Apple" />
 *       <Select.Item value="banana" label="Banana" />
 *     </Select.Content>
 *   </Select.Portal>
 * </Select>
 *
 * // With groups
 * <Select>
 *   <Select.Trigger>
 *     <Select.Value placeholder="Choose" />
 *   </Select.Trigger>
 *   <Select.Portal>
 *     <Select.Overlay />
 *     <Select.Content>
 *       <Select.ListLabel>Fruits</Select.ListLabel>
 *       <Select.Item value="apple" label="Apple" />
 *       <Select.Item value="orange" label="Orange" />
 *       <Select.ListLabel>Vegetables</Select.ListLabel>
 *       <Select.Item value="carrot" label="Carrot" />
 *     </Select.Content>
 *   </Select.Portal>
 * </Select>
 * ```
 */
const SelectComponent: React.FC<SelectProps> = ({ children, ...props }) => {
	return <HeroSelect {...props}>{children}</HeroSelect>;
};

SelectComponent.displayName = 'Select';

// Custom Select.Item with minimum width to prevent layout issues
type SelectItemProps = ComponentProps<typeof HeroSelect.Item>;

const SelectItem: React.FC<SelectItemProps> = ({ style, ...props }) => {
	const combinedStyle =
		typeof style === 'function'
			? (state: any) => [styles.item, style(state)]
			: [styles.item, style];

	return <HeroSelect.Item {...props} style={combinedStyle} />;
};

SelectItem.displayName = 'SelectItem';

const styles = StyleSheet.create({
	item: {
		minWidth: 200,
	},
});

// Create compound component with all subcomponents
export const Select = Object.assign(SelectComponent, {
	Trigger: HeroSelect.Trigger,
	Value: HeroSelect.Value,
	Portal: HeroSelect.Portal,
	Overlay: HeroSelect.Overlay,
	Content: HeroSelect.Content,
	Close: HeroSelect.Close,
	ListLabel: HeroSelect.ListLabel,
	Item: SelectItem,
	ItemLabel: HeroSelect.ItemLabel,
	ItemDescription: HeroSelect.ItemDescription,
	ItemIndicator: HeroSelect.ItemIndicator,
});

export default Select;
