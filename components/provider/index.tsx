import { HeroUINativeProvider } from 'heroui-native';
import type { PropsWithChildren, ReactNode } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export * from './ThemeProvider';

export function Providers({ children }: PropsWithChildren): ReactNode {
	return (
		<SafeAreaProvider>
			<HeroUINativeProvider>{children}</HeroUINativeProvider>
		</SafeAreaProvider>
	);
}
