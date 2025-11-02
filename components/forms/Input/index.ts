// Pure UI Component
export { InputView } from './InputView';
export type { InputProps as InputViewProps } from './InputView';

// MobX Integrated Component (default)
export { Input } from './Input';
export { Input as default } from './Input';
export type { InputProps } from './Input';

// Re-export types
export type {
	InputColor,
	InputSize,
	InputVariant,
	LabelPlacement,
	InputRef,
} from './InputView';
