import type { Meta, StoryObj } from '@storybook/react-native';
import { Text } from '../../data-display/Text';
import { Background } from './Background';

const meta: Meta<typeof Background> = {
	title: 'components/ui/surfaces/Background',
	component: Background,
};

export default meta;

type Story = StoryObj<typeof Background>;

/**
 * Default Background
 */
export const Default: Story = {
	render: () => (
		<Background
			style={{
				flex: 1,
				padding: 16,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Text variant="h3">Background Component</Text>
		</Background>
	),
};

/**
 * With Gap and Padding
 */
export const WithGapAndPadding: Story = {
	render: () => (
		<Background
			style={{
				flex: 1,
				padding: 16,
				gap: 20,
			}}
		>
			<Text variant="h4">Item 1</Text>
			<Text variant="h4">Item 2</Text>
			<Text variant="h4">Item 3</Text>
		</Background>
	),
};
