import type { Meta, StoryObj } from '@storybook/react-native';
import { observable } from 'mobx';
import React from 'react';
import { ComponentShowcase, Text, View } from '../../index';
import { Switch } from './index';

const meta: Meta<typeof Switch> = {
	title: 'components/ui/inputs/Switch',
	component: Switch,
	decorators: [
		Story => (
			<ComponentShowcase
				title="Switch"
				description={[
					'온/오프 상태를 전환할 수 있는 토글 컨트롤입니다.',
					'커스텀 Thumb, 시작/끝 콘텐츠, 애니메이션 설정을 지원합니다.',
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
				<Text variant="label">기본 사용</Text>
				<BasicExample />
			</View>

			{/* 커스텀 Thumb */}
			<View className="gap-2">
				<Text variant="label">커스텀 Thumb</Text>
				<CustomThumbExample />
			</View>

			{/* 시작/끝 콘텐츠 */}
			<View className="gap-2">
				<Text variant="label">시작/끝 콘텐츠</Text>
				<StartEndContentExample />
			</View>

			{/* 비활성화 */}
			<View className="gap-2">
				<Text variant="label">비활성화 상태</Text>
				<DisabledExample />
			</View>

			{/* 라벨과 함께 */}
			<View className="gap-2">
				<Text variant="label">라벨과 함께</Text>
				<WithLabelExample />
			</View>
		</View>
	),
};

const BasicExample: React.FC = () => {
	const [state] = React.useState(() =>
		observable({
			enabled: false,
		})
	);

	return <Switch state={state} path="enabled" />;
};

const CustomThumbExample: React.FC = () => {
	const [state] = React.useState(() =>
		observable({
			customThumb: false,
		})
	);

	return (
		<Switch state={state} path="customThumb">
			<Switch.Thumb>
				<Text variant="body2">{state.customThumb ? '✓' : '✕'}</Text>
			</Switch.Thumb>
		</Switch>
	);
};

const StartEndContentExample: React.FC = () => {
	const [state] = React.useState(() =>
		observable({
			darkMode: false,
		})
	);

	return (
		<Switch state={state} path="darkMode">
			<Switch.Thumb />
			<Switch.StartContent>
				<Text variant="body2">☀️</Text>
			</Switch.StartContent>
			<Switch.EndContent>
				<Text variant="body2">🌙</Text>
			</Switch.EndContent>
		</Switch>
	);
};

const DisabledExample: React.FC = () => {
	const [state] = React.useState(() =>
		observable({
			disabled: true,
		})
	);

	return <Switch state={state} path="disabled" isDisabled />;
};

const WithLabelExample: React.FC = () => {
	const [state] = React.useState(() =>
		observable({
			notifications: true,
		})
	);

	return (
		<View className="flex-row items-center gap-3">
			<Switch state={state} path="notifications" />
			<Text variant="body1">
				알림 활성화: {state.notifications ? '켜짐' : '꺼짐'}
			</Text>
		</View>
	);
};
