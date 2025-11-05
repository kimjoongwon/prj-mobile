import { Tabs } from 'expo-router';
import React from 'react';

import { useColorScheme } from '@/components/hooks/use-color-scheme';
import { Colors } from '@/constants/theme';

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme as 'light' | 'dark'].tint,
				headerShown: false,
				// tabBarButton: HapticTab,
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Home',
				}}
			/>
			<Tabs.Screen
				name="explore"
				options={{
					title: 'Explore',
				}}
			/>
		</Tabs>
	);
}
