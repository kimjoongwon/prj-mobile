import { ComponentShowcase, Text } from "@/components";
import type { Meta, StoryObj } from "@storybook/react-native";
import { View } from "react-native";
import type { ButtonProps } from "./Button";
import { Button } from "./Button";

const meta: Meta<ButtonProps> = {
	title: "components/ui/inputs/Button",
	component: Button,
	decorators: [
		(Story) => (
			<ComponentShowcase
				title="Button"
				description={[
					"heroui-native Button 컴포넌트를 확장한 버튼입니다.",
					"startIcon/endIcon props로 아이콘을 쉽게 추가할 수 있습니다.",
					"Button.Label을 사용한 수동 조합도 지원합니다.",
				]}
			>
				<Story />
			</ComponentShowcase>
		),
	],
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const 변형_전체: Story = {
	render: () => (
		<View className="gap-4 w-full">
			<View className="gap-2">
				<Text variant="label">Primary</Text>
				<Button variant="primary">Primary Button</Button>
			</View>

			<View className="gap-2">
				<Text variant="label">Secondary</Text>
				<Button variant="secondary">Secondary Button</Button>
			</View>

			<View className="gap-2">
				<Text variant="label">Tertiary</Text>
				<Button variant="tertiary">Tertiary Button</Button>
			</View>

			<View className="gap-2">
				<Text variant="label">Ghost</Text>
				<Button variant="ghost">Ghost Button</Button>
			</View>

			<View className="gap-2">
				<Text variant="label">Destructive</Text>
				<Button variant="destructive">Destructive Button</Button>
			</View>

			<View className="gap-2">
				<Text variant="label">Destructive Soft</Text>
				<Button variant="destructive-soft">Destructive Soft Button</Button>
			</View>
		</View>
	),
};

export const 크기_전체: Story = {
	render: () => (
		<View className="gap-4 w-full items-center">
			<View className="gap-2 items-center">
				<Text variant="label">Small</Text>
				<Button size="sm" variant="primary">
					Small Button
				</Button>
			</View>

			<View className="gap-2 items-center">
				<Text variant="label">Medium</Text>
				<Button size="md" variant="primary">
					Medium Button
				</Button>
			</View>

			<View className="gap-2 items-center">
				<Text variant="label">Large</Text>
				<Button size="lg" variant="primary">
					Large Button
				</Button>
			</View>
		</View>
	),
};

export const 상태_전체: Story = {
	render: () => (
		<View className="gap-4 w-full">
			<View className="gap-2">
				<Text variant="label">기본 상태</Text>
				<Button variant="primary">기본 버튼</Button>
			</View>

			<View className="gap-2">
				<Text variant="label">비활성화 상태</Text>
				<Button variant="primary" isDisabled>
					비활성화된 버튼
				</Button>
			</View>

			<View className="gap-2">
				<Text variant="label">아이콘 전용</Text>
				<Button variant="destructive" isIconOnly>
					❤️
				</Button>
			</View>
		</View>
	),
};

export const 아이콘_조합: Story = {
	render: () => (
		<View className="gap-4 w-full">
			<View className="gap-2">
				<Text variant="label">startIcon 사용</Text>
				<Button variant="primary" startIcon={<Text>➕</Text>}>
					Add Item
				</Button>
			</View>

			<View className="gap-2">
				<Text variant="label">endIcon 사용</Text>
				<Button variant="secondary" endIcon={<Text>→</Text>}>
					Next
				</Button>
			</View>

			<View className="gap-2">
				<Text variant="label">양쪽 아이콘</Text>
				<Button
					variant="tertiary"
					startIcon={<Text>⬅</Text>}
					endIcon={<Text>➡</Text>}
				>
					Navigate
				</Button>
			</View>

			<View className="gap-2">
				<Text variant="label">수동 조합 (Button.Label)</Text>
				<Button variant="primary">
					<Text>🔍</Text>
					<Button.Label>Search</Button.Label>
				</Button>
			</View>

			<View className="gap-2">
				<Text variant="label">수동 조합 - 아이콘 뒤</Text>
				<Button variant="ghost">
					<Button.Label>Download</Button.Label>
					<Text>⬇</Text>
				</Button>
			</View>
		</View>
	),
};
