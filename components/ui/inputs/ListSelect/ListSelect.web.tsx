import React, { useCallback, useState } from 'react';
import { List } from '../../surfaces/List';

export type SelectionMode = 'single' | 'multiple';

export interface ListSelectSingleProps<T extends object> {
	data: T[];
	renderItem: (data: T, isSelected: boolean, index: number) => React.ReactNode;
	selectionMode: 'single';
	onChangeSelection?: (selectedItem: T | null) => void;
	selectedItems?: T | null;
	defaultSelectedItems?: T | null;
	keyExtractor?: (item: T, index: number) => string;
	style?: React.CSSProperties | any;
	placeholder?: React.ReactNode;
	isDisabled?: boolean;
}

export interface ListSelectMultipleProps<T extends object> {
	data: T[];
	renderItem: (data: T, isSelected: boolean, index: number) => React.ReactNode;
	selectionMode: 'multiple';
	onChangeSelection?: (selectedItems: T[]) => void;
	selectedItems?: T[];
	defaultSelectedItems?: T[];
	keyExtractor?: (item: T, index: number) => string;
	style?: React.CSSProperties | any;
	placeholder?: React.ReactNode;
	isDisabled?: boolean;
}

export type ListSelectProps<T extends object> =
	| ListSelectSingleProps<T>
	| ListSelectMultipleProps<T>;

export function ListSelect<T extends object>(
	props: ListSelectSingleProps<T>
): React.ReactElement;
export function ListSelect<T extends object>(
	props: ListSelectMultipleProps<T>
): React.ReactElement;
export function ListSelect<T extends object>(
	props: ListSelectProps<T>
): React.ReactElement {
	const {
		data,
		renderItem,
		selectionMode,
		onChangeSelection,
		selectedItems: controlledSelectedItems,
		defaultSelectedItems,
		keyExtractor,
		style,
		placeholder,
		isDisabled = false,
	} = props;

	// Internal state management
	const [internalSelectedItems, setInternalSelectedItems] = useState<T[]>(
		() => {
			if (selectionMode === 'single') {
				return defaultSelectedItems ? [defaultSelectedItems as T] : [];
			}
			return (defaultSelectedItems as T[]) || [];
		}
	);

	// Get current selected items
	const getSelectedItems = (): T[] => {
		if (controlledSelectedItems !== undefined) {
			if (selectionMode === 'single') {
				return controlledSelectedItems ? [controlledSelectedItems as T] : [];
			}
			return controlledSelectedItems as T[];
		}
		return internalSelectedItems;
	};

	const selectedItems = getSelectedItems();

	// Check if item is selected
	const isItemSelected = useCallback(
		(item: T, index: number): boolean => {
			if (keyExtractor) {
				const key = keyExtractor(item, index);
				return selectedItems.some(selectedItem => {
					const selectedIndex = data.findIndex(
						dataItem => dataItem === selectedItem
					);
					return (
						selectedIndex !== -1 &&
						keyExtractor(selectedItem, selectedIndex) === key
					);
				});
			} else {
				// keyExtractor가 없으면 직접 객체 비교
				return selectedItems.some(selectedItem => selectedItem === item);
			}
		},
		[selectedItems, keyExtractor, data]
	);

	// Handle item selection
	const handleItemPress = useCallback(
		(item: T, index: number) => {
			if (isDisabled) return;

			if (selectionMode === 'single') {
				const isSelected = isItemSelected(item, index);
				const newSelectedItem = isSelected ? null : item;

				if (controlledSelectedItems === undefined) {
					setInternalSelectedItems(newSelectedItem ? [newSelectedItem] : []);
				}

				if (onChangeSelection) {
					(onChangeSelection as (selectedItem: T | null) => void)(
						newSelectedItem
					);
				}
			} else {
				const isSelected = isItemSelected(item, index);
				let newSelectedItems: T[];

				if (isSelected) {
					// Remove item
					if (keyExtractor) {
						const key = keyExtractor(item, index);
						newSelectedItems = selectedItems.filter(selectedItem => {
							const selectedIndex = data.findIndex(
								dataItem => dataItem === selectedItem
							);
							return (
								selectedIndex === -1 ||
								keyExtractor(selectedItem, selectedIndex) !== key
							);
						});
					} else {
						// keyExtractor가 없으면 직접 객체 비교
						newSelectedItems = selectedItems.filter(
							selectedItem => selectedItem !== item
						);
					}
				} else {
					// Add item
					newSelectedItems = [...selectedItems, item];
				}

				if (controlledSelectedItems === undefined) {
					setInternalSelectedItems(newSelectedItems);
				}

				if (onChangeSelection) {
					(onChangeSelection as (selectedItems: T[]) => void)(newSelectedItems);
				}
			}
		},
		[
			selectionMode,
			selectedItems,
			isItemSelected,
			keyExtractor,
			isDisabled,
			controlledSelectedItems,
			onChangeSelection,
			data,
		]
	);

	return (
		<List
			data={data}
			style={style}
			placeholder={placeholder}
			renderItem={(item, index) => (
				<button
					key={keyExtractor ? keyExtractor(item, index) : index}
					onClick={() => handleItemPress(item, index)}
					disabled={isDisabled}
					style={{
						background: 'none',
						border: 'none',
						padding: 0,
						cursor: isDisabled ? 'not-allowed' : 'pointer',
						width: '100%',
						textAlign: 'left',
					}}
				>
					{renderItem(item, isItemSelected(item, index), index)}
				</button>
			)}
		/>
	);
}
