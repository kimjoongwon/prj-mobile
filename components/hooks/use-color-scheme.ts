import { useColorScheme as useColorSchemeNative } from 'react-native';

export function useColorScheme(): 'light' | 'dark' {
	const colorScheme = useColorSchemeNative();
	return colorScheme ?? 'light';
}
