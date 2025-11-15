import { HeroUINativeProvider } from 'heroui-native';
import type { PropsWithChildren, ReactNode } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from './ThemeProvider';

export * from './ThemeProvider';

export function Providers({ children }: PropsWithChildren): ReactNode {
	return (
		<SafeAreaProvider>
			<ThemeProvider>
				<HeroUINativeProvider>{children}</HeroUINativeProvider>
			</ThemeProvider>
		</SafeAreaProvider>
	);
}
