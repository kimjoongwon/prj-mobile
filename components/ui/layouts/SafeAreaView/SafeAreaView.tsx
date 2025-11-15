import { withUniwind } from 'uniwind';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';

/**
 * SafeAreaView Component
 * A wrapper around react-native-safe-area-context's SafeAreaView with Uniwind className support
 *
 * Usage:
 * ```tsx
 * <SafeAreaView className="flex-1 bg-background">
 *   <Text>Content</Text>
 * </SafeAreaView>
 * ```
 */
export const SafeAreaView = withUniwind(RNSafeAreaView);
