// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

const isStorybookMode = process.env.EXPO_PUBLIC_STORYBOOK === 'true';

if (isStorybookMode) {
	// Storybook 모드: NativeWind + Storybook 래퍼 모두 적용
	const withStorybook = require('@storybook/react-native/metro/withStorybook');
	module.exports = withStorybook(config);
} else {
	module.exports = config;
}
