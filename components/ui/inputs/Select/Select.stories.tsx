import type { Meta, StoryObj } from '@storybook/react-native';
import { observable } from 'mobx';
import React from 'react';
import { View } from 'react-native';
import { ComponentShowcase, Text } from '../../../index';
import { Select } from './index';

const meta: Meta<typeof Select> = {
	title: 'components/ui/inputs/Select',
	component: Select,
	decorators: [
		Story => (
			<ComponentShowcase
				title="Select"
				description={[
					'드롭다운 선택 인터페이스를 제공하는 Select 컴포넌트입니다.',
					'heroui-native Select를 기반으로 하며, 모바일에서는 Bottom Sheet, 데스크톱에서는 Dialog로 표시됩니다.',
				]}
			>
				<Story />
			</ComponentShowcase>
		),
	],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const 전체_시나리오: Story = {
	render: () => (
		<View className="gap-6 w-full">
			{/* 기본 사용 */}
			<View className="gap-2">
				<Text variant="label" color="default">
					기본 사용
				</Text>
				<BasicExample />
			</View>

			{/* 그룹 레이블 */}
			<View className="gap-2">
				<Text variant="label" color="default">
					그룹 레이블
				</Text>
				<GroupedExample />
			</View>

			{/* 설명 포함 */}
			<View className="gap-2">
				<Text variant="label" color="default">
					설명 포함
				</Text>
				<DescriptionExample />
			</View>

			{/* 비활성화 */}
			<View className="gap-2">
				<Text variant="label" color="default">
					비활성화 상태
				</Text>
				<DisabledExample />
			</View>

			{/* 실사용 예제 */}
			<View className="gap-2">
				<Text variant="label" color="default">
					실사용 예제 (Controlled)
				</Text>
				<ControlledExample />
			</View>
		</View>
	),
};

const BasicExample: React.FC = () => {
	const [state] = React.useState(() =>
		observable({
			fruit: undefined as { value: string; label: string } | undefined,
		})
	);

	return (
		<Select state={state} path="fruit">
			<Select.Trigger>
				<Select.Value placeholder="과일을 선택하세요" />
			</Select.Trigger>
			<Select.Portal>
				<Select.Overlay />
				<Select.Content>
					<Select.Item value="apple" label="사과" />
					<Select.Item value="orange" label="오렌지" />
					<Select.Item value="banana" label="바나나" />
					<Select.Item value="grape" label="포도" />
				</Select.Content>
			</Select.Portal>
		</Select>
	);
};

const GroupedExample: React.FC = () => {
	const [state] = React.useState(() =>
		observable({
			item: undefined as { value: string; label: string } | undefined,
		})
	);

	return (
		<Select state={state} path="item">
			<Select.Trigger>
				<Select.Value placeholder="항목을 선택하세요" />
			</Select.Trigger>
			<Select.Portal>
				<Select.Overlay />
				<Select.Content>
					<Select.ListLabel>과일</Select.ListLabel>
					<Select.Item value="apple" label="사과" />
					<Select.Item value="orange" label="오렌지" />
					<Select.Item value="banana" label="바나나" />
					<Select.ListLabel>채소</Select.ListLabel>
					<Select.Item value="carrot" label="당근" />
					<Select.Item value="potato" label="감자" />
				</Select.Content>
			</Select.Portal>
		</Select>
	);
};

const DescriptionExample: React.FC = () => {
	const [state] = React.useState(() =>
		observable({
			shipping: undefined as { value: string; label: string } | undefined,
		})
	);

	return (
		<Select state={state} path="shipping">
			<Select.Trigger>
				<Select.Value placeholder="배송 옵션을 선택하세요" />
			</Select.Trigger>
			<Select.Portal>
				<Select.Overlay />
				<Select.Content>
					<Select.Item value="standard" label="일반 배송" />
					<Select.Item value="express" label="익일 배송" />
					<Select.Item value="same-day" label="당일 배송" />
				</Select.Content>
			</Select.Portal>
		</Select>
	);
};

const DisabledExample: React.FC = () => {
	const [state] = React.useState(() =>
		observable({
			option: undefined as { value: string; label: string } | undefined,
		})
	);

	return (
		<Select state={state} path="option" isDisabled>
			<Select.Trigger>
				<Select.Value placeholder="비활성화됨" />
			</Select.Trigger>
			<Select.Portal>
				<Select.Overlay />
				<Select.Content>
					<Select.Item value="option1" label="옵션 1" />
					<Select.Item value="option2" label="옵션 2" />
				</Select.Content>
			</Select.Portal>
		</Select>
	);
};

const ControlledExample: React.FC = () => {
	const [state] = React.useState(() =>
		observable({
			framework: { value: 'react', label: 'React' } as
				| { value: string; label: string }
				| undefined,
		})
	);

	return (
		<View className="gap-2">
			<Select state={state} path="framework">
				<Select.Trigger>
					<Select.Value placeholder="프레임워크를 선택하세요" />
				</Select.Trigger>
				<Select.Portal>
					<Select.Overlay />
					<Select.Content>
						<Select.Item value="react" label="React" />
						<Select.Item value="vue" label="Vue" />
						<Select.Item value="angular" label="Angular" />
						<Select.Item value="svelte" label="Svelte" />
					</Select.Content>
				</Select.Portal>
			</Select>
			<Text variant="body1" color="default">
				선택된 값: {state.framework?.label || '없음'}
			</Text>
		</View>
	);
};
