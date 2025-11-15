import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { ComponentShowcase } from './ComponentShowcase';

const meta: Meta<typeof ComponentShowcase> = {
	title: 'components/ui/display/ComponentShowcase',
	component: ComponentShowcase,
	argTypes: {
		title: {
			control: 'text',
			description: '컴포넌트 이름',
		},
		description: {
			control: 'text',
			description: '컴포넌트 설명 (문자열 또는 배열)',
		},
		align: {
			control: 'select',
			options: ['center', 'left', 'right'],
			description: '정렬 방향',
		},
		showTitle: {
			control: 'boolean',
			description: '제목 표시 여부',
		},
		spacing: {
			control: 'number',
			description: '간격 조정',
		},
		showActions: {
			control: 'boolean',
			description: 'Actions 섹션 표시 여부',
		},
		actionsAlign: {
			control: 'select',
			options: ['center', 'left', 'right'],
			description: 'Actions 섹션 정렬',
		},
		showThemeSwitch: {
			control: 'boolean',
			description: '테마 전환 버튼 표시',
		},
		showContainerResize: {
			control: 'boolean',
			description: '컨테이너 크기 조절 표시',
		},
		defaultContainerSize: {
			control: 'select',
			options: ['small', 'medium', 'large', 'full'],
			description: '기본 컨테이너 크기',
		},
	},
} satisfies Meta<typeof ComponentShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

const SampleComponent = () => (
	<View className="w-20 h-20 bg-primary rounded-lg items-center justify-center">
		<View className="text-white font-semibold" />
	</View>
);

export const 기본: Story = {
	args: {
		title: 'Sample Component',
		description: '이것은 샘플 컴포넌트입니다.',
		children: <SampleComponent />,
	},
};

export const 여러줄_설명: Story = {
	args: {
		title: 'Multi-line Description',
		description: [
			'첫 번째 설명 라인입니다.',
			'두 번째 설명 라인입니다.',
			'세 번째 설명 라인입니다.',
		],
		children: <SampleComponent />,
	},
};

export const 왼쪽_정렬: Story = {
	args: {
		title: 'Left Aligned',
		description: '왼쪽 정렬된 컴포넌트 쇼케이스입니다.',
		align: 'left',
		children: <SampleComponent />,
	},
};

export const 오른쪽_정렬: Story = {
	args: {
		title: 'Right Aligned',
		description: '오른쪽 정렬된 컴포넌트 쇼케이스입니다.',
		align: 'right',
		children: <SampleComponent />,
	},
};

export const 제목_숨김: Story = {
	args: {
		title: 'Hidden Title',
		description: '제목이 숨겨진 컴포넌트 쇼케이스입니다.',
		showTitle: false,
		children: <SampleComponent />,
	},
};

export const 커스텀_간격: Story = {
	args: {
		title: 'Custom Spacing',
		description: '간격이 32px로 설정된 컴포넌트 쇼케이스입니다.',
		spacing: 32,
		children: <SampleComponent />,
	},
};

export const 테마_토글_포함: Story = {
	args: {
		title: 'With Theme Toggle',
		description: '우측 상단에 테마 토글 버튼이 포함된 컴포넌트 쇼케이스입니다.',
		showThemeSwitch: true,
		children: <SampleComponent />,
	},
};

export const Actions_테마전환: Story = {
	args: {
		title: 'Actions - Theme Switch',
		description: 'Actions 섹션에서 테마를 전환할 수 있습니다.',
		showActions: true,
		showThemeSwitch: true,
		children: <SampleComponent />,
	},
};

export const Actions_컨테이너크기: Story = {
	args: {
		title: 'Actions - Container Resize',
		description: 'Actions 섹션에서 컨테이너 크기를 조절할 수 있습니다.',
		showActions: true,
		showContainerResize: true,
		defaultContainerSize: 'medium',
		children: <SampleComponent />,
	},
};

export const Actions_전체기능: Story = {
	args: {
		title: 'Actions - Full Features',
		description: [
			'테마 전환과 컨테이너 크기 조절을 모두 사용할 수 있습니다.',
			'다양한 디바이스 크기에서 컴포넌트를 테스트해보세요.',
		],
		showActions: true,
		showThemeSwitch: true,
		showContainerResize: true,
		defaultContainerSize: 'small',
		children: <SampleComponent />,
	},
};
