// Pure UI Component

export type { InputProps } from './Input';
// MobX Integrated Component (default)
export { Input as default, Input } from './Input';
// Re-export types
export { InputView } from './InputView';
export type {
	InputColor,
	InputRef,
	InputSize,
	InputVariant,
	InputProps as InputViewProps,
	LabelPlacement,
} from './InputView';
