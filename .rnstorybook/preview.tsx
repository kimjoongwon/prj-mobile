import type { Preview } from '@storybook/react';
import { View } from 'react-native';
import { ThemeProvider } from '../components/provider/ThemeProvider';

const preview: Preview = {
	parameters: {
		controls: {
			expanded: true,
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
	decorators: [
		(Story, { globals }) => {
			// Storybook 테마 설정을 감지하여 Unistyles 테마로 전달
			const isDarkMode = globals.theme === 'dark';

			return (
				<View key={`theme-${globals.theme}`} style={{ flex: 1 }}>
					<ThemeProvider initialTheme={isDarkMode ? 'dark' : 'light'}>
						<Story />
					</ThemeProvider>
				</View>
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
