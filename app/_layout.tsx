import { Stack } from 'expo-router';
import 'react-native-reanimated';
import { Providers } from '@/components/providers';

export const unstable_settings = {
  anchor: '(tabs)',
};

/**
 * Root Layout - EXPO_PUBLIC_STORYBOOK 환경변수에 따라 렌더링 분기
 *
 * Storybook 모드 (npm run storybook:native):
 *   - Storybook UI만 표시
 *   - 앱의 라우팅 완전 우회
 *
 * 일반 앱 모드 (npm start):
 *   - 정상적인 라우팅 흐름 (Tabs, Modal 등)
 */
export default function RootLayout() {
  const isStorybookMode = process.env.EXPO_PUBLIC_STORYBOOK === 'true';

  if (isStorybookMode) {
    // Storybook 모드: 라우팅을 완전히 우회하고 Storybook만 표시
    const StorybookView = require('../.rnstorybook').default;
    return (
      <Providers>
        <StorybookView />
      </Providers>
    );
  }

  // 일반 앱 모드: 정상적인 라우팅 흐름
  return (
    <Providers>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
    </Providers>
  );
}
