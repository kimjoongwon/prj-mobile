import type { Meta, StoryObj } from '@storybook/react-native';
import { TextFieldView } from './TextFieldView';

const meta: Meta<typeof TextFieldView> = {
	title: 'components/ui/inputs/TextField',
	component: TextFieldView,
	decorators: [Story => <Story />],
};

export default meta;

type Story = StoryObj<typeof TextFieldView>;

/**
 * BASIC STORIES
 */
export const Default: Story = {
	render: () => (
		<TextFieldView>
			<TextFieldView.Label>이메일</TextFieldView.Label>
			<TextFieldView.Input placeholder="Enter email" />
		</TextFieldView>
	),
};

/**
 * With Description
 */
export const WithDescription: Story = {
	render: () => (
		<TextFieldView description="We'll never share your email">
			<TextFieldView.Label>이메일</TextFieldView.Label>
			<TextFieldView.Input placeholder="Enter email" />
		</TextFieldView>
	),
};

/**
 * With Error Message (Props-based)
 */
export const WithErrorMessage: Story = {
	render: () => (
		<TextFieldView isInvalid errorMessage="Invalid email address">
			<TextFieldView.Label>이메일</TextFieldView.Label>
			<TextFieldView.Input placeholder="Enter email" />
		</TextFieldView>
	),
};

/**
 * With InputStartContent and InputEndContent (Props-based)
 */
export const WithInputContent: Story = {
	render: () => (
		<TextFieldView
			// inputStartContent="🔍"
			// inputEndContent="✓"
			description="Search something"
		>
			<TextFieldView.Label>검색</TextFieldView.Label>
			<TextFieldView.Input placeholder="Search..." />
		</TextFieldView>
	),
};

/**
 * Complete Example with Children
 */
export const Complete: Story = {
	render: () => (
		<TextFieldView isInvalid>
			<TextFieldView.Label>비밀번호</TextFieldView.Label>
			<TextFieldView.Input placeholder="Enter password" secureTextEntry>
				{/* <TextFieldView.InputStartContent>🔒</TextFieldView.InputStartContent> */}
				{/* <TextFieldView.InputEndContent>👁️</TextFieldView.InputEndContent> */}
			</TextFieldView.Input>
			<TextFieldView.Description>
				최소 8자의 숫자, 문자, 특수문자 포함
			</TextFieldView.Description>
			<TextFieldView.ErrorMessage>
				비밀번호는 8자 이상이어야 합니다
			</TextFieldView.ErrorMessage>
		</TextFieldView>
	),
};

/**
 * Mixed Props and Children
 */
export const MixedPropsAndChildren: Story = {
	render: () => (
		<TextFieldView
			description="Helper text from props"
			errorMessage="Error from props"
			isInvalid
		>
			<TextFieldView.Label>이름</TextFieldView.Label>
			<TextFieldView.Input placeholder="Enter name">
				{/* <TextFieldView.InputStartContent>👤</TextFieldView.InputStartContent> */}
			</TextFieldView.Input>
		</TextFieldView>
	),
};
