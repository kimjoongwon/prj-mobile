import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';
import { ComponentShowcase } from '../../ui/data-display/ComponentShowcase';
import { LoginScreen } from './LoginScreen';

const meta: Meta<typeof LoginScreen> = {
	title: 'components/screen/LoginScreen',
	component: LoginScreen,
	decorators: [
		Story => (
			<ComponentShowcase
				title="LoginScreen"
				description={[
					'완성된 로그인 화면 컴포넌트입니다.',
					'로그인 폼, 소셜 로그인, 링크 버튼들을 포함합니다.',
				]}
				showThemeSwitch={true}
				showContainerResize={false}
			>
				<Story />
			</ComponentShowcase>
		),
	],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const 기본: Story = {
	render: () => (
		<View style={{ flex: 1, width: '100%', height: 600 }}>
			<LoginScreen />
		</View>
	),
};

export const 콜백함수포함: Story = {
	render: () => (
		<View style={{ flex: 1, width: '100%', height: 600 }}>
			<LoginScreen
				onLogin={(email, password, keepLoggedIn) =>
					console.log('로그인:', { email, password, keepLoggedIn })
				}
				onSignUp={() => console.log('회원가입')}
				onForgotPassword={() => console.log('비밀번호 찾기')}
				onGoogleLogin={() => console.log('구글 로그인')}
				onAppleLogin={() => console.log('애플 로그인')}
				onKakaoLogin={() => console.log('카카오 로그인')}
			/>
		</View>
	),
};
