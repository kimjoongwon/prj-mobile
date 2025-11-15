import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';
import { ComponentShowcase } from '../../data-display/ComponentShowcase';
import { Text } from '../../data-display/Text';
import { Surface } from './Surface';

const meta: Meta<typeof Surface> = {
	title: 'components/ui/surfaces/Surface',
	component: Surface,
	decorators: [
		Story => (
			<ComponentShowcase
				title="Surface"
				description={[
					'elevation과 배경 스타일링을 제공하는 컨테이너 컴포넌트입니다.',
					'다양한 variant를 통해 시각적 계층을 만들 수 있습니다.',
				]}
				showThemeSwitch={true}
				showContainerResize={true}
			>
				<Story />
			</ComponentShowcase>
		),
	],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const 기본: Story = {
	render: () => (
		<Surface variant="default" className="gap-2">
			<Text className="text-foreground">Surface Content</Text>
			<Text className="text-muted">
				기본 surface variant입니다. bg-surface 스타일을 사용합니다.
			</Text>
		</Surface>
	),
};

export const 변형들: Story = {
	render: () => (
		<View style={{ gap: 16, width: '100%' }}>
			<Surface variant="default" className="gap-2">
				<Text className="text-foreground">Default Surface</Text>
				<Text className="text-muted">기본 surface variant입니다.</Text>
			</Surface>

			<Surface variant="secondary" className="gap-2">
				<Text className="text-foreground">Secondary Surface</Text>
				<Text className="text-muted">2차 surface variant입니다.</Text>
			</Surface>

			<Surface variant="tertiary" className="gap-2">
				<Text className="text-foreground">Tertiary Surface</Text>
				<Text className="text-muted">3차 surface variant입니다.</Text>
			</Surface>

			<Surface variant="quaternary" className="gap-2">
				<Text className="text-foreground">Quaternary Surface</Text>
				<Text className="text-muted">4차 surface variant입니다.</Text>
			</Surface>
		</View>
	),
};

export const 중첩된서페이스: Story = {
	render: () => (
		<Surface variant="default" className="gap-4">
			<Text className="text-foreground">Default Surface</Text>
			<Surface variant="secondary" className="gap-4">
				<Text className="text-foreground">Secondary Surface</Text>
				<Surface variant="tertiary" className="gap-4">
					<Text className="text-foreground">Tertiary Surface</Text>
					<Surface variant="quaternary" className="gap-2">
						<Text className="text-foreground">Quaternary Surface</Text>
						<Text className="text-muted">가장 깊은 레벨입니다.</Text>
					</Surface>
				</Surface>
			</Surface>
		</Surface>
	),
};

export const 커스텀스타일링: Story = {
	render: () => (
		<View style={{ gap: 16, width: '100%' }}>
			<Surface className="bg-accent-soft gap-2">
				<Text className="text-foreground">Custom Background</Text>
				<Text className="text-muted">
					className으로 커스텀 배경색을 적용했습니다.
				</Text>
			</Surface>

			<Surface variant="quaternary" className="p-0 gap-2">
				<Text className="text-foreground" style={{ padding: 8 }}>
					Custom Padding
				</Text>
				<Text className="text-muted" style={{ padding: 8 }}>
					패딩을 0으로 설정하고 내부에서 조정했습니다.
				</Text>
			</Surface>
		</View>
	),
};
