import { type UnistyleTheme } from '@/unistyles';
import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create((theme: UnistyleTheme) => ({
	container: {
		flex: 1,
		backgroundColor: theme.colors.background,
	},
	safeAreaContainer: {
		flex: 1,
	},
}));
