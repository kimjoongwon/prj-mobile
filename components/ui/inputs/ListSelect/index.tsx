import { useFormField } from '@cocrepo/hooks';
import type { MobxProps } from '@cocrepo/types';
import { get } from 'lodash-es';
import { observer } from 'mobx-react-lite';
import type React from 'react';
import { useCallback } from 'react';
import {
	type ListSelectMultipleProps as BaseListSelectMultipleProps,
	type ListSelectProps as BaseListSelectProps,
	type ListSelectSingleProps as BaseListSelectSingleProps,
	ListSelect as ListSelectComponent,
	type SelectionMode,
} from './ListSelect';

// Single 모드용 MobX Props
export interface MobxListSelectSingleProps<T extends object, D extends object>
	extends MobxProps<T>,
		Omit<
			BaseListSelectSingleProps<D>,
			'selectedItems' | 'onChangeSelection' | 'selectionMode'
		> {
	data: D[];
	renderItem: (data: D, isSelected: boolean, index: number) => React.ReactNode;
	selectionMode: 'single';
}

// Multiple 모드용 MobX Props
export interface MobxListSelectMultipleProps<T extends object, D extends object>
	extends MobxProps<T>,
		Omit<
			BaseListSelectMultipleProps<D>,
			'selectedItems' | 'onChangeSelection' | 'selectionMode'
		> {
	data: D[];
	renderItem: (data: D, isSelected: boolean, index: number) => React.ReactNode;
	selectionMode: 'multiple';
}

export type MobxListSelectProps<T extends object, D extends object> =
	| MobxListSelectSingleProps<T, D>
	| MobxListSelectMultipleProps<T, D>;

export function ListSelect<T extends object, D extends object>(
	props: MobxListSelectSingleProps<T, D>
): React.ReactElement;
export function ListSelect<T extends object, D extends object>(
	props: MobxListSelectMultipleProps<T, D>
): React.ReactElement;
export function ListSelect<T extends object, D extends object>(
	props: MobxListSelectProps<T, D>
): React.ReactElement {
	const { state, path, selectionMode, defaultSelectedItems, ...rest } = props;

	// Always call hooks unconditionally at the top level
	const singleInitialValue = get(state, path || '', null) as D | null;
	const multipleInitialValue = get(state, path || '', []) as D[];

	const singleFormField = useFormField<T, D | null>({
		value: singleInitialValue,
		state,
		path,
	});

	const multipleFormField = useFormField<T, D[]>({
		value: multipleInitialValue,
		state,
		path,
	});

	const handleSingleChange = useCallback(
		(selectedData: D | null) => {
			singleFormField.setValue(selectedData);
		},
		[singleFormField]
	);

	const handleMultipleChange = useCallback(
		(selectedData: D[]) => {
			multipleFormField.setValue(selectedData);
		},
		[multipleFormField]
	);

	// Render based on selectionMode
	if (selectionMode === 'single') {
		return (
			<ListSelectComponent
				{...rest}
				selectionMode="single"
				selectedItems={singleFormField.state.value}
				onChangeSelection={handleSingleChange}
				defaultSelectedItems={defaultSelectedItems as D | null | undefined}
			/>
		);
	} else {
		return (
			<ListSelectComponent
				{...rest}
				selectionMode="multiple"
				selectedItems={multipleFormField.state.value}
				onChangeSelection={handleMultipleChange}
				defaultSelectedItems={defaultSelectedItems as D[] | undefined}
			/>
		);
	}
}

export const ObservedListSelect = observer(ListSelect);

ObservedListSelect.displayName = 'MobxListSelect';

// 기본 컴포넌트도 export
export { ListSelectComponent };
export type {
	BaseListSelectMultipleProps,
	BaseListSelectProps,
	BaseListSelectSingleProps,
	SelectionMode,
};
