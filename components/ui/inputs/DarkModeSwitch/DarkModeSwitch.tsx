import { useTheme } from '@/hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { Button } from 'heroui-native';
import React from 'react';

export interface DarkModeSwitchProps {
	className?: string;
}

export const DarkModeSwitch: React.FC<DarkModeSwitchProps> = ({
	className,
}) => {
	const { isDark, toggleTheme } = useTheme();

	return (
		<Button
			isIconOnly
			variant="ghost"
			size="sm"
			onPress={toggleTheme}
			className={className}
		>
			<Ionicons
				name={isDark ? 'sunny' : 'moon'}
				size={16}
				color={isDark ? '#f5a524' : '#006fee'}
			/>
		</Button>
	);
};

DarkModeSwitch.displayName = 'DarkModeSwitch';
