import { ComponentShowcase } from "@/components";
import type { Meta, StoryObj } from "@storybook/react-native";
import { View } from "react-native";
import type { TextProps } from "./Text";
import { Text } from "./Text";

const meta: Meta<TextProps> = {
	title: "components/ui/display/Text",
	component: Text,
	decorators: [
		(Story) => (
			<ComponentShowcase
				title="Text"
				description={[
					"tailwind-variants를 사용한 타이포그래피 컴포넌트입니다.",
					"다양한 variant와 color 옵션을 지원합니다.",
				]}
			>
				<Story />
			</ComponentShowcase>
		),
	],
	parameters: {
		layout: "centered",
	},
	argTypes: {
		variant: {
			control: { type: "select" },
			options: [
				"h1",
				"h2",
				"h3",
				"h4",
				"h5",
				"h6",
				"body1",
				"body2",
				"caption",
				"overline",
			],
			description: "Text의 타이포그래피 스타일",
		},
		color: {
			control: { type: "select" },
			options: [
				"foreground",
				"primary",
				"secondary",
				"success",
				"warning",
				"danger",
				"default",
			],
			description: "Text의 색상",
		},
	},
};

export default meta;
type Story = StoryObj<TextProps>;

export const 기본: Story = {
	args: {
		children: "기본 텍스트입니다",
	},
};

export const 타이포그래피_전체: Story = {
	render: () => (
		<View className="gap-4 w-full">
			<View className="gap-2">
				<Text variant="caption">Headings</Text>
				<View className="gap-1">
					<Text variant="h1">Heading 1</Text>
					<Text variant="h2">Heading 2</Text>
					<Text variant="h3">Heading 3</Text>
					<Text variant="h4">Heading 4</Text>
					<Text variant="h5">Heading 5</Text>
					<Text variant="h6">Heading 6</Text>
				</View>
			</View>

			<View className="gap-2">
				<Text variant="caption">Body Text</Text>
				<View className="gap-1">
					<Text variant="body1">Body 1 - 일반 본문 텍스트</Text>
					<Text variant="body2">Body 2 - 보조 본문 텍스트</Text>
					<Text variant="caption">Caption - 작은 설명 텍스트</Text>
					<Text variant="overline">Overline - 라벨 텍스트</Text>
				</View>
			</View>
		</View>
	),
};

export const 색상_전체: Story = {
	render: () => (
		<View className="gap-2 w-full">
			<Text color="foreground">Foreground - 기본 전경 색상</Text>
			<Text color="primary">Primary - 주요 색상</Text>
			<Text color="secondary">Secondary - 보조 색상</Text>
			<Text color="success">Success - 성공 색상</Text>
			<Text color="warning">Warning - 경고 색상</Text>
			<Text color="danger">Danger - 위험 색상</Text>
		</View>
	),
};
