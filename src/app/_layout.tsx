import { DarkModeSwitch, Providers, Screen } from '@/components';
import { Stack } from 'expo-router';
import { Suspense, lazy } from 'react';
import 'react-native-reanimated';
import '../../globals.css';

export const unstable_settings = {
	anchor: '(tabs)',
};

export default function RootLayout() {
	const isStorybookMode = process.env.EXPO_PUBLIC_STORYBOOK === 'true';

	if (isStorybookMode) {
		// Storybook 모드: 동적 import로 로드하여 Node.js 모듈 에러 방지
		const StorybookView = lazy(() => import('../../.rnstorybook'));
		return (
			<Suspense fallback={<></>}>
				<Providers>
					<Screen>
						<StorybookView />
					</Screen>
					<DarkModeSwitch />
				</Providers>
			</Suspense>
		);
	}

	// 일반 앱 모드: 정상적인 라우팅 흐름
	return (
		<Providers>
			<Stack>
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				<Stack.Screen
					name="modal"
					options={{ presentation: 'modal', title: 'Modal' }}
				/>
			</Stack>
		</Providers>
	);
}
