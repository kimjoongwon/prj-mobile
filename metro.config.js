// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const { withUniwindConfig } = require('uniwind/metro');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

const isStorybookMode = process.env.EXPO_PUBLIC_STORYBOOK === 'true';

const uniwindConfig = withUniwindConfig(config, {
	// relative path to your global.css file (from previous step)
	cssEntryFile: './globals.css',
	// (optional) path where we gonna auto-generate typings
	// defaults to project's root
	dtsFile: './uniwind-types.d.ts',
});

if (isStorybookMode) {
	// Storybook 모드: NativeWind + Storybook 래퍼 모두 적용
	try {
		const { withStorybook } = require('@storybook/react-native/metro');
		module.exports = withStorybook(uniwindConfig);
	} catch (error) {
		console.warn(
			'Storybook metro config not found, falling back to uniwind config:',
			error.message
		);
		module.exports = uniwindConfig;
	}
} else {
	module.exports = uniwindConfig;
}
