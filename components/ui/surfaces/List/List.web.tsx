import React from 'react';

export interface ListProps<T> {
	data: T[];
	renderItem: (item: T, index: number) => React.ReactNode;
	horizontal?: boolean;
	style?: React.CSSProperties | any;
	contentContainerStyle?: React.CSSProperties | any;
	placeholder?: React.ReactNode;
	gap?: number;
	itemStyle?: React.CSSProperties | any;
	showsHorizontalScrollIndicator?: boolean;
	showsVerticalScrollIndicator?: boolean;
}

export const List = <T extends object>(props: ListProps<T>) => {
	const {
		data,
		renderItem,
		horizontal = false,
		style,
		contentContainerStyle,
		placeholder,
		gap = 8,
		itemStyle,
		showsHorizontalScrollIndicator = false,
		showsVerticalScrollIndicator = false,
	} = props;

	if (data.length === 0) {
		return placeholder ? <div style={style}>{placeholder}</div> : null;
	}

	const containerStyle: React.CSSProperties = {
		...contentContainerStyle,
		...(horizontal
			? { display: 'flex', flexDirection: 'row', gap: `${gap}px` }
			: { display: 'flex', flexDirection: 'column', gap: `${gap}px` }),
	};

	const scrollContainerStyle: React.CSSProperties = {
		...style,
		overflow: horizontal ? 'auto' : 'auto',
		overflowX: horizontal ? 'auto' : 'hidden',
		overflowY: horizontal ? 'hidden' : 'auto',
		msOverflowStyle: showsHorizontalScrollIndicator || showsVerticalScrollIndicator ? 'auto' : 'none',
		scrollbarWidth: showsHorizontalScrollIndicator || showsVerticalScrollIndicator ? 'auto' : 'none',
	};

	return (
		<div style={scrollContainerStyle}>
			<div style={containerStyle}>
				{data.map((item, index) => (
					<div key={index} style={itemStyle}>
						{renderItem(item, index)}
					</div>
				))}
			</div>
		</div>
	);
};
