import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useNavigationContainerRef } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useReactQueryDevTools } from "@dev-plugins/react-query";
import { useMMKVDevTools } from "@dev-plugins/react-native-mmkv";
import { useReactNavigationDevTools } from "@dev-plugins/react-navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SheetProvider } from "react-native-actions-sheet";
import * as SplashScreen from "expo-splash-screen";
import { ActivityIndicator } from "react-native";
import { observer } from "mobx-react-lite";
import { AuthController } from "@/controllers";
import "react-native-reanimated";
import "../global.css";
import "@/components/sheets";
import "@/services/init";

SplashScreen.preventAutoHideAsync();

export const queryClient = new QueryClient();

const RootLayout = observer(() => {
  const navigationRef = useNavigationContainerRef();
  // Expo DevTools
  useReactNavigationDevTools(navigationRef);
  useReactQueryDevTools(queryClient);
  useMMKVDevTools();

  const { colorScheme } = useColorScheme();

  const [isFontLoaded] = useFonts({
    "Pretendard-Black": require("../assets/fonts/Pretendard-Black.otf"),
    "Pretendard-Bold": require("../assets/fonts/Pretendard-Bold.otf"),
    "Pretendard-ExtraBold": require("../assets/fonts/Pretendard-ExtraBold.otf"),
    "Pretendard-ExtraLight": require("../assets/fonts/Pretendard-ExtraLight.otf"),
    "Pretendard-Light": require("../assets/fonts/Pretendard-Light.otf"),
    "Pretendard-Medium": require("../assets/fonts/Pretendard-Medium.otf"),
    "Pretendard-Regular": require("../assets/fonts/Pretendard-Regular.otf"),
    "Pretendard-SemiBold": require("../assets/fonts/Pretendard-SemiBold.otf"),
    "Pretendard-Thin": require("../assets/fonts/Pretendard-Thin.otf"),
  });

  if (!isFontLoaded) {
    return <ActivityIndicator />;
  }

  SplashScreen.hideAsync();

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <SheetProvider>
            <AuthController />
            <Stack>
              <Stack.Screen
                name="gateway/index"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="login/index"
                options={{ headerShown: false }}
              />
              <Stack.Screen //
                name="(tabs)"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="gym-select/index"
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                //
                name="+not-found"
              />
            </Stack>
            <StatusBar style="auto" />
          </SheetProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
});

export default RootLayout;
