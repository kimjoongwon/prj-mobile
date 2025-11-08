import type { Preview } from '@storybook/react-native-web-vite';
import { View } from 'react-native';
import { ThemeProvider } from '../components/provider/ThemeProvider';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		// Storybook 네이티브 다크모드 설정
		docs: {
			canvas: {
				sourceState: 'shown',
			},
		},
	},
	decorators: [
		(Story, { globals }) => {
			// Storybook의 테마 설정을 감지하여 ThemeProvider에 전달
			const isDarkMode = globals.theme === 'dark';

			return (
				<ThemeProvider initialTheme={isDarkMode ? 'dark' : 'light'}>
					<View style={{ flex: 1 }}>
						<Story />
					</View>
				</ThemeProvider>
			);
		},
	],
	globalTypes: {
		theme: {
			name: 'Theme',
			description: 'Global theme for components',
			defaultValue: 'light',
			toolbar: {
				icon: 'circlehollow',
				items: [
					{ value: 'light', icon: 'sun', title: '☀️ Light' },
					{ value: 'dark', icon: 'moon', title: '🌙 Dark' },
				],
				dynamicTitle: true,
			},
		},
	},
};

export default preview;
