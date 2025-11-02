import { useFormField } from "@cocrepo/hooks";
import type { MobxProps } from "@cocrepo/types";
import { get } from "lodash-es";
import { action } from "mobx";
import { observer } from "mobx-react-lite";
import {
	type InputProps as BaseInputProps,
	Input as InputComponent,
} from "./Input";

export interface InputProps<T>
	extends MobxProps<T>,
		Omit<BaseInputProps, "value" | "onChangeText"> {}

export const Input = observer(<T extends object>(props: InputProps<T>) => {
	const { state, path, ...rest } = props;

	const initialValue = get(state, path) as string;

	const { localState } = useFormField({
		initialValue,
		state,
		path,
	});

	const handleChange = action((value: string) => {
		localState.value = value;
	});

	return (
		<InputComponent
			{...rest}
			value={localState.value}
			onChangeText={handleChange}
		/>
	);
});

Input.displayName = "MobxInput";

export type {
	InputColor, InputSize,
	InputVariant,
	LabelPlacement, InputProps as PureInputProps
} from "./Input";
// Re-export the pure component and types for direct use
export { Input as default } from "./Input";
