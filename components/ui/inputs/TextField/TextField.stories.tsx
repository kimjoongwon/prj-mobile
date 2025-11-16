import { ComponentShowcase, Text } from "@/components";
import type { Meta, StoryObj } from "@storybook/react-native";
import { View } from "react-native";
import { TextField } from "./TextField";

const meta: Meta<typeof TextField> = {
	title: "components/ui/inputs/TextField",
	component: TextField,
	decorators: [
		(Story) => (
			<ComponentShowcase
				title="TextField"
				description={[
					"복합 컴포넌트 패턴을 사용한 입력 필드 컴포넌트입니다.",
					"Label, Input, Description, ErrorMessage를 조합하여 사용할 수 있습니다.",
				]}
			>
				<Story />
			</ComponentShowcase>
		),
	],
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const 전체_시나리오: Story = {
	render: () => (
		<View className="gap-6 w-full">
			{/* 기본 */}
			<View className="gap-2">
				<Text variant="label">기본</Text>
				<TextField>
					<TextField.Label>이메일</TextField.Label>
					<TextField.Input placeholder="Enter email" />
				</TextField>
			</View>

			{/* 설명 포함 */}
			<View className="gap-2">
				<Text variant="label">설명 포함</Text>
				<TextField description="We'll never share your email">
					<TextField.Label>이메일</TextField.Label>
					<TextField.Input placeholder="Enter email" />
				</TextField>
			</View>

			{/* 에러 상태 */}
			<View className="gap-2">
				<Text variant="label">에러 상태</Text>
				<TextField isInvalid errorMessage="Invalid email address">
					<TextField.Label>이메일</TextField.Label>
					<TextField.Input placeholder="Enter email" />
				</TextField>
			</View>

			{/* 완전한 예제 */}
			<View className="gap-2">
				<Text variant="label">완전한 예제</Text>
				<TextField isInvalid>
					<TextField.Label>비밀번호</TextField.Label>
					<TextField.Input placeholder="Enter password" secureTextEntry />
					<TextField.Description>
						최소 8자의 숫자, 문자, 특수문자 포함
					</TextField.Description>
					<TextField.ErrorMessage>
						비밀번호는 8자 이상이어야 합니다
					</TextField.ErrorMessage>
				</TextField>
			</View>
		</View>
	),
};
