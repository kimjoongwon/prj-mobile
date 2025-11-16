import { Providers, SafeAreaView } from '@/components';
import { Stack } from 'expo-router';
import { lazy, Suspense } from 'react';
import 'react-native-reanimated';
import '../../globals.css';

export const unstable_settings = {
	anchor: '(tabs)',
};

function StorybookLayout() {
	const StorybookView = lazy(() => import('../../.rnstorybook'));

	return (
		<Suspense fallback={<></>}>
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
