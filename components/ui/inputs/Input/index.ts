// Pure UI Component

export type { InputProps } from './Input';
// MobX Integrated Component (default)
export { Input as default, Input } from './Input';
export type {
	InputRef,
	InputSize,
	InputVariant,
	InputProps as InputViewProps,
} from './InputView';
// Re-export types
export { InputView } from './InputView';
