import { useTheme } from '@/hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity } from 'react-native';

export interface DarkModeSwitchProps {
	className?: string;
}

export const DarkModeSwitch: React.FC<DarkModeSwitchProps> = ({
	className,
}) => {
	const { isDark, toggleTheme } = useTheme();

	return (
		<TouchableOpacity
			className="bottom-0 w-11 h-11 rounded-full justify-center items-center border border-default-200 dark:border-default-700 bg-white dark:bg-default-800 shadow-md absolute"
			onPress={toggleTheme}
			activeOpacity={0.7}
		>
			<Ionicons
				name={isDark ? 'sunny' : 'moon'}
				size={20}
				color={isDark ? '#f5a524' : '#006fee'}
			/>
		</TouchableOpacity>
	);
};

DarkModeSwitch.displayName = 'DarkModeSwitch';
