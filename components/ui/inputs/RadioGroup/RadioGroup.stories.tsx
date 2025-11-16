import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';
import { ComponentShowcase, Text } from '../../../index';
import { RadioGroup } from './RadioGroup';

const meta: Meta<typeof RadioGroup> = {
	title: 'components/ui/inputs/RadioGroup',
	component: RadioGroup,
	decorators: [
		Story => (
			<ComponentShowcase
				title="RadioGroup"
				description={[
					'사용자가 여러 옵션 중 하나를 선택할 수 있는 라디오 그룹 컴포넌트입니다.',
					'heroui-native RadioGroup을 기반으로 하며, 컴파운드 컴포넌트 패턴을 사용합니다.',
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
				<Text variant="label">
					기본 사용
				</Text>
				<BasicExample />
			</View>

			{/* 설명 포함 */}
			<View className="gap-2">
				<Text variant="label">
					설명 포함
				</Text>
				<DescriptionExample />
			</View>

			{/* 상태 */}
			<View className="gap-2">
				<Text variant="label">
					상태 (States)
				</Text>
				<View className="gap-4">
					<View className="gap-2">
						<Text variant="body1">
							비활성화된 그룹
						</Text>
						<DisabledExample />
					</View>
					<View className="gap-2">
						<Text variant="body1">
							개별 비활성화
						</Text>
						<IndividualDisabledExample />
					</View>
				</View>
			</View>

			{/* 유효성 검사 */}
			<View className="gap-2">
				<Text variant="label">
					유효성 검사
				</Text>
				<InvalidExample />
			</View>

			{/* 실사용 예제 */}
			<View className="gap-2">
				<Text variant="label">
					실사용 예제
				</Text>
				<ControlledExample />
			</View>
		</View>
	),
};

const BasicExample: React.FC = () => {
	const [value, setValue] = React.useState<string | undefined>('seoul');

	return (
		<RadioGroup value={value} onValueChange={setValue}>
			<RadioGroup.Item value="seoul">
				<RadioGroup.Label>서울</RadioGroup.Label>
				<RadioGroup.Indicator />
			</RadioGroup.Item>
			<RadioGroup.Item value="busan">
				<RadioGroup.Label>부산</RadioGroup.Label>
				<RadioGroup.Indicator />
			</RadioGroup.Item>
			<RadioGroup.Item value="incheon">
				<RadioGroup.Label>인천</RadioGroup.Label>
				<RadioGroup.Indicator />
			</RadioGroup.Item>
		</RadioGroup>
	);
};

const DescriptionExample: React.FC = () => {
	const [value, setValue] = React.useState<string | undefined>('standard');

	return (
		<RadioGroup value={value} onValueChange={setValue}>
			<RadioGroup.Item value="standard">
				<RadioGroup.Label>일반 배송</RadioGroup.Label>
				<RadioGroup.Description>2-3일 소요</RadioGroup.Description>
				<RadioGroup.Indicator />
			</RadioGroup.Item>
			<RadioGroup.Item value="express">
				<RadioGroup.Label>익일 배송</RadioGroup.Label>
				<RadioGroup.Description>1일 소요</RadioGroup.Description>
				<RadioGroup.Indicator />
			</RadioGroup.Item>
			<RadioGroup.Item value="same-day">
				<RadioGroup.Label>당일 배송</RadioGroup.Label>
				<RadioGroup.Description>추가 요금</RadioGroup.Description>
				<RadioGroup.Indicator />
			</RadioGroup.Item>
		</RadioGroup>
	);
};

const DisabledExample: React.FC = () => {
	const [value, setValue] = React.useState<string | undefined>('option1');

	return (
		<RadioGroup value={value} onValueChange={setValue} isDisabled>
			<RadioGroup.Item value="option1">
				<RadioGroup.Label>옵션 1</RadioGroup.Label>
				<RadioGroup.Indicator />
			</RadioGroup.Item>
			<RadioGroup.Item value="option2">
				<RadioGroup.Label>옵션 2</RadioGroup.Label>
				<RadioGroup.Indicator />
			</RadioGroup.Item>
		</RadioGroup>
	);
};

const IndividualDisabledExample: React.FC = () => {
	const [value, setValue] = React.useState<string | undefined>('option1');

	return (
		<RadioGroup value={value} onValueChange={setValue}>
			<RadioGroup.Item value="option1">
				<RadioGroup.Label>활성화된 옵션</RadioGroup.Label>
				<RadioGroup.Indicator />
			</RadioGroup.Item>
			<RadioGroup.Item value="option2" isDisabled>
				<RadioGroup.Label>비활성화된 옵션</RadioGroup.Label>
				<RadioGroup.Indicator />
			</RadioGroup.Item>
		</RadioGroup>
	);
};

const InvalidExample: React.FC = () => {
	const [value, setValue] = React.useState<string | undefined>();

	return (
		<RadioGroup value={value} onValueChange={setValue} isInvalid>
			<RadioGroup.Item value="option1">
				<RadioGroup.Label>옵션 1</RadioGroup.Label>
				<RadioGroup.Indicator />
			</RadioGroup.Item>
			<RadioGroup.Item value="option2">
				<RadioGroup.Label>옵션 2</RadioGroup.Label>
				<RadioGroup.Indicator />
			</RadioGroup.Item>
			<RadioGroup.ErrorMessage>
				하나의 옵션을 선택해주세요.
			</RadioGroup.ErrorMessage>
		</RadioGroup>
	);
};

const ControlledExample: React.FC = () => {
	const [value, setValue] = React.useState<string | undefined>('react');

	return (
		<View className="gap-2">
			<RadioGroup value={value} onValueChange={setValue}>
				<RadioGroup.Item value="react">
					<RadioGroup.Label>React</RadioGroup.Label>
					<RadioGroup.Indicator />
				</RadioGroup.Item>
				<RadioGroup.Item value="vue">
					<RadioGroup.Label>Vue</RadioGroup.Label>
					<RadioGroup.Indicator />
				</RadioGroup.Item>
				<RadioGroup.Item value="angular">
					<RadioGroup.Label>Angular</RadioGroup.Label>
					<RadioGroup.Indicator />
				</RadioGroup.Item>
			</RadioGroup>
			<Text variant="body1">
				선택된 값: {value || '없음'}
			</Text>
		</View>
	);
};
