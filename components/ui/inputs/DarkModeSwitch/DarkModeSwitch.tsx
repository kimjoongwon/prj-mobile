import { useTheme } from '@/hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';

export interface DarkModeSwitchProps {
	style?: ViewStyle;
}

export const DarkModeSwitch: React.FC<DarkModeSwitchProps> = ({ style }) => {
	const { isDark, toggleTheme } = useTheme();

	return (
		<View style={[styles.container, style]}>
			<TouchableOpacity
				style={[
					styles.button,
					{
						backgroundColor: isDark ? '#27272a' : '#ffffff',
						borderColor: isDark ? '#323238' : '#ebebec',
					},
				]}
				onPress={toggleTheme}
				activeOpacity={0.7}
			>
				<Ionicons
					name={isDark ? 'sunny' : 'moon'}
					size={20}
					color={isDark ? '#f5a524' : '#006fee'}
				/>
			</TouchableOpacity>
		</View>
	);
};

DarkModeSwitch.displayName = 'DarkModeSwitch';

const styles = StyleSheet.create({
	container: {
		// 위치 관련 스타일 제거 - 사용하는 곳에서 결정
	},
	button: {
		width: 44,
		height: 44,
		borderRadius: 22,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 3,
	},
});
