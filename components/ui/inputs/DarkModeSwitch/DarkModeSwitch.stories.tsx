import { ComponentShowcase } from '@/components';
import type { Meta, StoryObj } from '@storybook/react-native';
import { DarkModeSwitch } from './DarkModeSwitch';

const meta: Meta<typeof DarkModeSwitch> = {
	title: 'components/ui/inputs/DarkModeSwitch',
	component: DarkModeSwitch,
	decorators: [
		Story => (
			<ComponentShowcase
				title="DarkModeSwitch"
				description={[
					'다크/라이트 모드를 전환할 수 있는 토글 스위치 컴포넌트입니다.',
					'HeroUI Button과 Tailwind className을 이용한 테마 기반 스타일링을 지원합니다.',
				]}
			>
				<Story />
			</ComponentShowcase>
		),
	],
	parameters: {
		layout: 'centered',
		notes: '다크/라이트 모드를 전환할 수 있는 토글 스위치 컴포넌트입니다.',
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

export const 기본: Story = {
	args: {},
};
