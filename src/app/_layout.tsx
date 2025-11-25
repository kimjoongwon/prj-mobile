import { Providers, SafeAreaView } from '@/components';
import { Stack } from 'expo-router';
import { Spinner } from 'heroui-native';
import { lazy, Suspense } from 'react';
import {
	configureReanimatedLogger,
	ReanimatedLogLevel,
} from 'react-native-reanimated';
import '../../globals.css';

// Reanimated strict 모드 경고 비활성화
configureReanimatedLogger({
	level: ReanimatedLogLevel.warn,
	strict: false, // strict 모드 비활성화
});

export const unstable_settings = {
	anchor: '(tabs)',
};

function StorybookLayout() {
	const StorybookView = lazy(() => import('../../.rnstorybook'));

	return (
		<Suspense fallback={<Spinner />}>
			<SafeAreaView className="flex-1 bg-background" edges={['top']}>
				<StorybookView />
			</SafeAreaView>
		</Suspense>
	);
}

function AppLayout() {
	return (
		<Stack>
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
			<Stack.Screen
				name="modal"
				options={{ presentation: 'modal', title: 'Modal' }}
			/>
		</Stack>
	);
}

export default function RootLayout() {
	const isStorybookMode = process.env.EXPO_PUBLIC_STORYBOOK === 'true';

	return (
		<Providers>
			{isStorybookMode ? <StorybookLayout /> : <AppLayout />}
		</Providers>
	);
}
