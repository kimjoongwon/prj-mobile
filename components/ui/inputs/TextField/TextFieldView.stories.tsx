import { ComponentShowcase, Text } from '@/components';
import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { TextFieldView } from './TextFieldView';

const meta: Meta<typeof TextFieldView> = {
	title: 'components/ui/inputs/TextField',
	component: TextFieldView,
	decorators: [
		Story => (
			<ComponentShowcase
				title="TextField"
				description={[
					'복합 컴포넌트 패턴을 사용한 입력 필드 컴포넌트입니다.',
					'Label, Input, Description, ErrorMessage를 조합하여 사용할 수 있습니다.',
				]}
			>
				<Story />
			</ComponentShowcase>
		),
	],
};

export default meta;

type Story = StoryObj<typeof TextFieldView>;

export const 전체_시나리오: Story = {
	render: () => (
		<View className="gap-6 w-full">
			{/* 기본 */}
			<View className="gap-2">
				<Text variant="label" color="default">
					기본
				</Text>
				<TextFieldView>
					<TextFieldView.Label>이메일</TextFieldView.Label>
					<TextFieldView.Input placeholder="Enter email" />
				</TextFieldView>
			</View>

			{/* 설명 포함 */}
			<View className="gap-2">
				<Text variant="label" color="default">
					설명 포함
				</Text>
				<TextFieldView description="We'll never share your email">
					<TextFieldView.Label>이메일</TextFieldView.Label>
					<TextFieldView.Input placeholder="Enter email" />
				</TextFieldView>
			</View>

			{/* 에러 상태 */}
			<View className="gap-2">
				<Text variant="label" color="default">
					에러 상태
				</Text>
				<TextFieldView isInvalid errorMessage="Invalid email address">
					<TextFieldView.Label>이메일</TextFieldView.Label>
					<TextFieldView.Input placeholder="Enter email" />
				</TextFieldView>
			</View>

			{/* 완전한 예제 */}
			<View className="gap-2">
				<Text variant="label" color="default">
					완전한 예제
				</Text>
				<TextFieldView isInvalid>
					<TextFieldView.Label>비밀번호</TextFieldView.Label>
					<TextFieldView.Input placeholder="Enter password" secureTextEntry />
					<TextFieldView.Description>
						최소 8자의 숫자, 문자, 특수문자 포함
					</TextFieldView.Description>
					<TextFieldView.ErrorMessage>
						비밀번호는 8자 이상이어야 합니다
					</TextFieldView.ErrorMessage>
				</TextFieldView>
			</View>
		</View>
	),
};
