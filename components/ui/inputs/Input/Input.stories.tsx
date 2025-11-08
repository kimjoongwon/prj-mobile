import { Ionicons } from '@expo/vector-icons';
import type { Meta, StoryObj } from '@storybook/react-native';
import { useRef } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { Text } from '../../display/Text';
import { type InputProps, type InputRef, InputView } from './InputView';

// Extended args interface for Storybook
interface InputStoryArgs extends InputProps {
	startIcon?: keyof typeof iconMapping;
	endIcon?: keyof typeof iconMapping;
}

// Icon mapping for args
const iconMapping = {
	none: undefined,
	mail: <Ionicons name="mail" size={16} color="#666" />,
	eye: <Ionicons name="eye" size={16} color="#666" />,
	search: <Ionicons name="search" size={16} color="#666" />,
	person: <Ionicons name="person" size={16} color="#666" />,
	lock: <Ionicons name="lock-closed" size={16} color="#666" />,
};

const meta: Meta<InputStoryArgs> = {
	title: 'Forms/Input',
	component: InputView,
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: ['default', 'outlined'],
		},
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg'],
		},
		startIcon: {
			control: { type: 'select' },
			options: ['none', 'mail', 'search', 'person', 'lock'],
			mapping: iconMapping,
		},
		endIcon: {
			control: { type: 'select' },
			options: ['none', 'eye', 'search'],
			mapping: iconMapping,
		},
		isDisabled: {
			control: { type: 'boolean' },
		},
		isReadOnly: {
			control: { type: 'boolean' },
		},
		isInvalid: {
			control: { type: 'boolean' },
		},
		isRequired: {
			control: { type: 'boolean' },
		},
		isClearable: {
			control: { type: 'boolean' },
		},
	},
	decorators: [
		(Story, { args }) => (
			<View style={{ padding: 16 }}>
				<Story
					args={{
						...args,
						startContent: args.startIcon || undefined,
						endContent: args.endIcon || undefined,
					}}
				/>
			</View>
		),
	],
};

export default meta;

type Story = StoryObj<InputStoryArgs>;

/**
 * VARIANT STORIES
 */
export const Default: Story = {
	args: {
		label: 'Email',
		placeholder: 'Enter your email',
		variant: 'default',
		size: 'md',
	},
};

export const Outlined: Story = {
	args: {
		label: 'Outlined Input',
		placeholder: 'Enter text',
		variant: 'outlined',
		size: 'md',
	},
};

/**
 * SIZE STORIES
 */
export const SmallSize: Story = {
	args: {
		label: 'Small Input',
		placeholder: 'Small size',
		variant: 'outlined',
		size: 'sm',
	},
};

export const MediumSize: Story = {
	args: {
		label: 'Medium Input',
		placeholder: 'Medium size',
		variant: 'outlined',
		size: 'md',
	},
};

export const LargeSize: Story = {
	args: {
		label: 'Large Input',
		placeholder: 'Large size',
		variant: 'outlined',
		size: 'lg',
	},
};

/**
 * STATE STORIES
 */
export const WithDescription: Story = {
	args: {
		label: 'Email Address',
		placeholder: 'Enter your email',
		description: 'We will never share your email',
		variant: 'outlined',
		size: 'md',
	},
};

export const WithError: Story = {
	args: {
		label: 'Email Address',
		placeholder: 'Enter your email',
		errorMessage: 'Invalid email format',
		isInvalid: true,
		variant: 'outlined',
		size: 'md',
	},
};

export const Required: Story = {
	args: {
		label: 'Full Name',
		placeholder: 'Enter your full name',
		isRequired: true,
		variant: 'outlined',
		size: 'md',
	},
};

export const Disabled: Story = {
	args: {
		label: 'Disabled Input',
		placeholder: 'This input is disabled',
		isDisabled: true,
		variant: 'outlined',
		size: 'md',
	},
};

export const ReadOnly: Story = {
	args: {
		label: 'Read Only Input',
		value: 'This text is read-only',
		isReadOnly: true,
		variant: 'outlined',
		size: 'md',
	},
};

export const Clearable: Story = {
	args: {
		label: 'Clearable Input',
		placeholder: 'Type something and clear',
		isClearable: true,
		variant: 'outlined',
		size: 'md',
	},
};

/**
 * CONTENT STORIES
 */
export const WithStartContent: Story = {
	args: {
		label: 'Email',
		placeholder: 'Enter your email',
		startIcon: 'mail',
		variant: 'outlined',
		size: 'md',
	},
};

export const WithEndContent: Story = {
	args: {
		label: 'Password',
		placeholder: 'Enter your password',
		endIcon: 'eye',
		variant: 'outlined',
		size: 'md',
	},
};

export const WithBothContent: Story = {
	args: {
		label: 'User ID',
		placeholder: 'Enter your ID',
		startIcon: 'person',
		endIcon: 'search',
		variant: 'outlined',
		size: 'md',
	},
};

/**
 * INTERACTIVE STORY
 */
export const Interactive: Story = {
	render: (args) => <InteractiveInputDemo {...args} />,
	args: {
		label: 'Interactive Input',
		placeholder: 'Type something',
		variant: 'outlined',
		size: 'md',
	},
};

function InteractiveInputDemo(args: InputStoryArgs) {
	const { theme } = useTheme();
	const inputRef = useRef<InputRef>(null);

	return (
		<View style={{ gap: 12 }}>
			<InputView ref={inputRef} {...args} />
			<View style={{ flexDirection: 'row', gap: 8 }}>
				<TouchableOpacity
					onPress={() => inputRef.current?.focus()}
					style={{
						paddingHorizontal: 16,
						paddingVertical: 8,
						backgroundColor: theme.colors.primary.DEFAULT,
						borderRadius: 4,
					}}
				>
					<Text style={{ color: theme.colors.foreground }}>Focus</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => inputRef.current?.blur()}
					style={{
						paddingHorizontal: 16,
						paddingVertical: 8,
						backgroundColor: theme.colors.default[200],
						borderRadius: 4,
					}}
				>
					<Text style={{ color: theme.colors.foreground }}>Blur</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => inputRef.current?.clear()}
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
