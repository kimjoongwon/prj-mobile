import { ThemeProvider } from '@/components/provider/ThemeProvider';
import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { DarkModeSwitch } from './DarkModeSwitch';

const meta: Meta<typeof DarkModeSwitch> = {
	title: 'components/ui/inputs/DarkModeSwitch',
	component: DarkModeSwitch,
	decorators: [
		Story => (
			<ThemeProvider>
				<View className="flex-1 justify-center items-center bg-white dark:bg-default-900">
					<Story />
				</View>
			</ThemeProvider>
		),
	],
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'다크/라이트 모드를 전환할 수 있는 토글 스위치 컴포넌트입니다. Uniwind className을 이용한 테마 기반 스타일링을 지원합니다.',
			},
		},
	},
	argTypes: {
		className: {
			description: '추가적인 className 설정',
			control: { type: 'text' },
		},
	},
} satisfies Meta<typeof DarkModeSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default DarkModeSwitch
 */
export const Default: Story = {
	args: {},
};

/**
 * With Custom Class
 */
export const WithCustomClass: Story = {
	args: {
		className: 'absolute top-5 right-5',
	},
	parameters: {
		docs: {
			description: {
				story:
					'className을 이용한 커스텀 스타일을 적용한 DarkModeSwitch입니다.',
			},
		},
	},
};
