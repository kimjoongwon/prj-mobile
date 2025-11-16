import { ComponentShowcase, Text } from "@/components";
import { Ionicons } from "@expo/vector-icons";
import type { Meta, StoryObj } from "@storybook/react-native";
import { View } from "react-native";
import { Chip } from "./Chip";

const meta: Meta<typeof Chip> = {
	title: "components/ui/inputs/Chip",
	component: Chip,
	decorators: [
		(Story) => (
			<ComponentShowcase
				title="Chip"
				description={[
					"heroui-native 기반 Chip 컴포넌트입니다.",
					"Chip.Label compound component와 startContent/endContent props를 지원합니다.",
				]}
			>
				<Story />
			</ComponentShowcase>
		),
	],
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const 전체_시나리오: Story = {
	render: () => (
		<View className="gap-6 w-full">
			{/* 기본 사용 */}
			<View className="gap-2">
				<Text variant="label">기본 사용</Text>
				<View className="flex-row flex-wrap gap-2">
					<Chip>Default Chip</Chip>
					<Chip color="accent">Accent</Chip>
					<Chip color="success">Success</Chip>
					<Chip color="warning">Warning</Chip>
					<Chip color="danger">Danger</Chip>
				</View>
			</View>

			{/* 변형 (Variants) */}
			<View className="gap-2">
				<Text variant="label">변형 (Variants)</Text>
				<View className="flex-row flex-wrap gap-2">
					<Chip variant="primary" color="accent">
						Primary
					</Chip>
					<Chip variant="secondary" color="accent">
						Secondary
					</Chip>
					<Chip variant="tertiary" color="accent">
						Tertiary
					</Chip>
					<Chip variant="soft" color="accent">
						Soft
					</Chip>
				</View>
			</View>

			{/* 크기 */}
			<View className="gap-2">
				<Text variant="label">크기</Text>
				<View className="flex-row items-center gap-2">
					<Chip size="sm" color="accent">
						Small
					</Chip>
					<Chip size="md" color="accent">
						Medium
					</Chip>
					<Chip size="lg" color="accent">
						Large
					</Chip>
				</View>
			</View>

			{/* 아이콘 포함 */}
			<View className="gap-2">
				<Text variant="label">아이콘 포함</Text>
				<View className="flex-row flex-wrap gap-2">
					<Chip
						variant="primary"
						color="accent"
						startContent={<Ionicons name="star" size={16} color="white" />}
					>
						Featured
					</Chip>
					<Chip
						variant="secondary"
						color="danger"
						endContent={<Ionicons name="close" size={14} color="#EF4444" />}
					>
						Remove
					</Chip>
					<Chip
						variant="secondary"
						color="success"
						startContent={
							<Ionicons name="checkmark" size={14} color="#10B981" />
						}
					>
						Verified
					</Chip>
				</View>
			</View>

			{/* Compound Component 사용 */}
			<View className="gap-2">
				<Text variant="label">Compound Component 사용</Text>
				<View className="flex-row flex-wrap gap-2">
					<Chip variant="secondary" color="success">
						<View
							style={{
								width: 6,
								height: 6,
								backgroundColor: "#10B981",
								borderRadius: 3,
								marginRight: 6,
							}}
						/>
						<Chip.Label>Active</Chip.Label>
					</Chip>
					<Chip variant="soft" color="warning">
						<View
							style={{
								width: 6,
								height: 6,
								backgroundColor: "#F59E0B",
								borderRadius: 3,
								marginRight: 6,
							}}
						/>
						<Chip.Label>Pending</Chip.Label>
					</Chip>
				</View>
			</View>

			{/* 실사용 예제 */}
			<View className="gap-2">
				<Text variant="label">실사용 예제 - 기술 스택</Text>
				<View className="flex-row flex-wrap gap-1.5">
					<Chip size="sm" variant="soft" color="accent">
						React Native
					</Chip>
					<Chip size="sm" variant="soft" color="accent">
						TypeScript
					</Chip>
					<Chip size="sm" variant="soft" color="success">
						Node.js
					</Chip>
					<Chip size="sm" variant="soft" color="warning">
						Expo
					</Chip>
				</View>
			</View>

			{/* 실사용 예제 - 필터 */}
			<View className="gap-2">
				<Text variant="label">실사용 예제 - 선택된 필터</Text>
				<View className="flex-row flex-wrap gap-2">
					<Chip
						variant="primary"
						color="accent"
						endContent={<Ionicons name="close" size={14} color="white" />}
					>
						React
					</Chip>
					<Chip
						variant="primary"
						color="accent"
						endContent={<Ionicons name="close" size={14} color="white" />}
					>
						Mobile
					</Chip>
					<Chip
						variant="primary"
						color="accent"
						endContent={<Ionicons name="close" size={14} color="white" />}
					>
						UI/UX
					</Chip>
				</View>
			</View>
		</View>
	),
};
