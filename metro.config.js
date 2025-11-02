// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

/**
 * NativeWind와 Storybook 통합
 *
 * - NativeWind: 모든 모드에서 CSS 스타일링 처리
 * - Storybook: EXPO_PUBLIC_STORYBOOK=true일 때만 로더 적용
 *
 * 사용:
 * - npm run storybook:native (NativeWind + Storybook)
 * - npm start (NativeWind만 적용)
 */
const isStorybookMode = process.env.EXPO_PUBLIC_STORYBOOK === 'true';

// NativeWind 항상 적용 (CSS 처리 필요)

if (isStorybookMode) {
	// Storybook 모드: NativeWind + Storybook 래퍼 모두 적용
	const withStorybook = require('@storybook/react-native/metro/withStorybook');
	module.exports = withStorybook(config);
} else {
	// 일반 앱 모드: NativeWind만 적용
	module.exports = config;
}
