import { useTheme } from '@/hooks/useTheme';
import type { Meta, StoryObj } from '@storybook/react-native';
import { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from '../../display/Text';
import {
	TextFieldView,
	TextFieldLabel,
	TextFieldInput,
	TextFieldDescription,
	TextFieldErrorMessage,
} from './TextFieldView';

const meta: Meta = {
	title: 'components/ui/inputs/TextField',
	component: TextFieldView,
	decorators: [
		(Story) => (
			<View style={{ padding: 16 }}>
				<Story />
			</View>
		),
	],
};

export default meta;

type Story = StoryObj;

/**
 * BASIC STORIES
 */
export const Default: Story = {
	render: () => (
		<TextFieldView>
			<TextFieldLabel>Email</TextFieldLabel>
			<TextFieldInput placeholder="Enter your email" />
		</TextFieldView>
	),
};

export const WithDescription: Story = {
	render: () => (
		<TextFieldView>
			<TextFieldLabel>Email</TextFieldLabel>
			<TextFieldInput placeholder="Enter your email" />
			<TextFieldDescription>We&apos;ll never share your email</TextFieldDescription>
		</TextFieldView>
	),
};

export const WithError: Story = {
	render: () => (
		<TextFieldView isInvalid>
			<TextFieldLabel>Email</TextFieldLabel>
			<TextFieldInput placeholder="Enter your email" />
			<TextFieldErrorMessage>Invalid email address</TextFieldErrorMessage>
		</TextFieldView>
	),
};

export const Required: Story = {
	render: () => (
		<TextFieldView isRequired>
			<TextFieldLabel>Full Name</TextFieldLabel>
			<TextFieldInput placeholder="Enter your full name" />
		</TextFieldView>
	),
};

export const Disabled: Story = {
	render: () => (
		<TextFieldView isDisabled>
			<TextFieldLabel>Disabled Input</TextFieldLabel>
			<TextFieldInput placeholder="This input is disabled" />
		</TextFieldView>
	),
};

/**
 * INTERACTIVE STORY
 */
export const Interactive: Story = {
	render: () => <InteractiveTextFieldDemo />,
};

function InteractiveTextFieldDemo() {
	const { theme } = useTheme();
	const [value, setValue] = useState('');

	return (
		<View style={{ gap: 12 }}>
			<TextFieldView>
				<TextFieldLabel>Interactive TextField</TextFieldLabel>
				<TextFieldInput
					placeholder="Type something"
					value={value}
					onChangeText={setValue}
				/>
			</TextFieldView>
			<View style={{ flexDirection: 'row', gap: 8 }}>
				<TouchableOpacity
					onPress={() => setValue('Focused')}
					style={{
						paddingHorizontal: 16,
						paddingVertical: 8,
						backgroundColor: theme.colors.primary.DEFAULT,
						borderRadius: 4,
					}}
				>
					<Text style={{ color: theme.colors.foreground }}>Set Text</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => setValue('')}
					style={{
						paddingHorizontal: 16,
						paddingVertical: 8,
						backgroundColor: theme.colors.danger.DEFAULT,
						borderRadius: 4,
					}}
				>
					<Text style={{ color: '#fff' }}>Clear</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
