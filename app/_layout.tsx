import { Providers } from '@/components/providers';
import { Stack } from 'expo-router';
import { Suspense, lazy } from 'react';
import 'react-native-reanimated';

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
    // Storybook 모드: 동적 import로 로드하여 Node.js 모듈 에러 방지
    const StorybookView = lazy(() => import('../.rnstorybook'));
    return (
      <Providers>
        <Suspense fallback={<></>}>
          <StorybookView />
        </Suspense>
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
