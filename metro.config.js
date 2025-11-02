// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

/**
 * EXPO_PUBLIC_STORYBOOK 환경변수가 true일 때만 withStorybook을 적용합니다.
 * 이를 통해 Storybook 모드에서만 필요한 번들을 로드합니다.
 *
 * 사용:
 * - npm run storybook:native (Storybook 모드)
 * - npm start (일반 앱 모드)
 */
const isStorybookMode = process.env.EXPO_PUBLIC_STORYBOOK === "true";

if (isStorybookMode) {
	const withStorybook = require("@storybook/react-native/metro/withStorybook");
	module.exports = withStorybook(config);
} else {
	module.exports = config;
}
